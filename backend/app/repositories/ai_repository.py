from sqlalchemy import text
from sqlalchemy.orm import Session


def execute_sql(db: Session, sql: str):

    result = db.execute(
        text(sql)
    )

    return [

        dict(row._mapping)

        for row in result

    ]