import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import joblib
df = pd.read_csv("app/forecasting/sales_history.csv")
print(df.head())

print(df.info())

df["date"] = pd.to_datetime(df["date"])

df["year"] = df["date"].dt.year

df["month"] = df["date"].dt.month

df["day"] = df["date"].dt.day

df["weekday"] = df["date"].dt.weekday

X = df[
    [
        "product_id",
        "year",
        "month",
        "day",
        "weekday"
    ]
]

y = df["units_sold"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

predictions = model.predict(X_test)

mae = mean_absolute_error(
    y_test,
    predictions
)

print(f"\nMean Absolute Error: {mae:.2f}")

joblib.dump(
    model,
    "app/forecasting/model.pkl"
)

print("\nModel Saved Successfully!")

print("\nFeatures")

print(X.head())

print("\nTarget")

print(y.head())