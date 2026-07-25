from pydantic import BaseModel


class ForecastRequest(BaseModel):

    product_id: int

    year: int

    month: int

    day: int

    weekday: int


class ForecastResponse(BaseModel):

    product_id: int

    predicted_sales: float