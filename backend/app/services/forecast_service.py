from app.forecasting.predict import predict_sales


def forecast_sales(request):

    prediction = predict_sales(

        product_id=request.product_id,

        year=request.year,

        month=request.month,

        day=request.day,

        weekday=request.weekday

    )

    return {

        "product_id": request.product_id,

        "predicted_sales": prediction

    }