from fastapi import APIRouter

from app.schemas.forecast import (
    ForecastRequest,
    ForecastResponse
)

from app.services.forecast_service import forecast_sales

router = APIRouter(
    prefix="/forecast",
    tags=["Forecasting"]
)


@router.post(
    "/predict",
    response_model=ForecastResponse
)
def predict(request: ForecastRequest):

    return forecast_sales(request)