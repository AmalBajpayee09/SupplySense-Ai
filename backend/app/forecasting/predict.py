import joblib
import pandas as pd

model = joblib.load(
    "app/forecasting/model.pkl"
)

def predict_sales(

        product_id: int,

        year: int,

        month: int,

        day: int,

        weekday: int

):

    input_data = pd.DataFrame(

        [[

            product_id,

            year,

            month,

            day,

            weekday

        ]],

        columns=[

            "product_id",

            "year",

            "month",

            "day",

            "weekday"

        ]

    )

    prediction = model.predict(input_data)

    return round(float(prediction[0]), 2)


if __name__ == "__main__":

    print(

        predict_sales(

            product_id=1,

            year=2026,

            month=1,

            day=15,

            weekday=3

        )

    )