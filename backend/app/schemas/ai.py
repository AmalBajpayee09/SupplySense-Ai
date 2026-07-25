from pydantic import BaseModel
from typing import Any

class AIQueryRequest(BaseModel):

    question: str


class AIQueryResponse(BaseModel):

    sql: str
    




class AIResultResponse(BaseModel):

    success: bool

    question: str

    answer: str

    generated_sql: str | None

    data: list[dict[str, Any]]

    error: str | None = None