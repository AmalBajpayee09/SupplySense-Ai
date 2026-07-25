import os

from dotenv import load_dotenv

from google import genai

from app.prompts.sql_prompt import SQL_PROMPT
from sqlalchemy.orm import Session

from app.repositories.ai_repository import execute_sql
from app.prompts.answer_prompt import ANSWER_PROMPT

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def clean_sql(sql: str):

    sql = sql.replace("```sql", "")

    sql = sql.replace("```", "")

    return sql.strip()

def validate_sql(sql: str):

    sql_upper = sql.upper().strip()

    blocked_keywords = [

        "DELETE",

        "UPDATE",

        "INSERT",

        "DROP",

        "ALTER",

        "TRUNCATE",

        "CREATE"

    ]

    if not sql_upper.startswith("SELECT"):

        raise ValueError(
            "Only SELECT queries are allowed."
        )

    for keyword in blocked_keywords:

        if keyword in sql_upper:

            raise ValueError(
                f"Blocked SQL keyword detected: {keyword}"
            )

    return sql

def generate_sql(question: str):

    prompt = SQL_PROMPT + question

    response = client.models.generate_content(

        model="gemini-2.5-flash",

        contents=prompt

    )

    sql = clean_sql(
        response.text
    )

    validate_sql(sql)

    return sql


    
    
    
def generate_answer(question: str, result: list):

    prompt = ANSWER_PROMPT.format(

        question=question,

        result=result

    )

    response = client.models.generate_content(

        model="gemini-2.5-flash",

        contents=prompt

    )

    return response.text.strip()  

def ask_ai(question: str, db: Session):

    try:

        sql = generate_sql(question)

        result = execute_sql(
            db,
            sql
        )

        answer = generate_answer(
            question,
            result
        )

        return {

            "success": True,

            "question": question,

            "answer": answer,

            "generated_sql": sql,

            "data": result

        }

    except Exception as e:

        return {

            "success": False,

            "question": question,

            "answer": "Unable to process your request.",

            "generated_sql": None,

            "data": [],

            "error": str(e)

        }