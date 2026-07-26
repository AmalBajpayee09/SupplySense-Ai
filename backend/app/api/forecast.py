from fastapi import APIRouter
from fastapi import Depends

from app.dependencies.auth import require_analyst
from app.models.user import User

from app.schemas.forecast import (
    ForecastRequest,
    ForecastResponse
)

from app.services.forecast_service import (
    forecast_sales,
    get_sales_history,
    get_forecast_comparison
)

router = APIRouter(
    prefix="/forecast",
    tags=["Forecasting"]
)


@router.post(
    "/predict",
    response_model=ForecastResponse
)
def predict(
    request: ForecastRequest,
    current_user: User = Depends(require_analyst)
):

    return forecast_sales(request)


@router.get(
    "/history/{product_id}"
)
def history(
    product_id: int,
    current_user: User = Depends(require_analyst)
):

    return get_sales_history(product_id)


@router.get(
    "/comparison/{product_id}"
)
def comparison(
    product_id: int,
    current_user: User = Depends(require_analyst)
):

    return get_forecast_comparison(product_id)