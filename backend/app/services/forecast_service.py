import pandas as pd

from app.forecasting.predict import predict_sales

from datetime import datetime, timedelta



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
    
    

def get_sales_history(product_id: int):

    df = pd.read_csv(
        "app/forecasting/sales_history.csv"
    )

    df = df[df["product_id"] == product_id]

    df = df.sort_values("date")

    history = []

    for _, row in df.iterrows():

        history.append({

            "date": row["date"],

            "units_sold": int(row["units_sold"])

        })

    return history    


def get_forecast_comparison(product_id: int):

    history = get_sales_history(product_id)

    forecast = []

    today = datetime(2026, 1, 1)

    for i in range(30):

        current = today + timedelta(days=i)

        prediction = predict_sales(

            product_id=product_id,

            year=current.year,

            month=current.month,

            day=current.day,

            weekday=current.weekday()

        )

        forecast.append({

            "date": current.strftime("%Y-%m-%d"),

            "predicted_sales": prediction

        })

    return {

        "historical": history,

        "forecast": forecast

    }