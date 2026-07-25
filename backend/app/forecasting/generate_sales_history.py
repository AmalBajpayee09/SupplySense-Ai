import pandas as pd
import random
from datetime import datetime, timedelta

# -----------------------------
# Product Information
# -----------------------------
products = [
    (1, "Samsung Galaxy S24"),
    (2, "iPhone 16 Pro"),
    (3, "Boat Airdopes 311")
]

# -----------------------------
# Date Range (1 Year)
# -----------------------------
start_date = datetime(2025, 1, 1)
end_date = datetime(2025, 12, 31)

records = []

current_date = start_date

while current_date <= end_date:

    weekday = current_date.weekday()

    for product_id, product_name in products:

        # Base demand
        if product_id == 1:
            base = 8
        elif product_id == 2:
            base = 6
        else:
            base = 15

        # Weekend demand increase
        if weekday >= 5:
            base += 3

        # Festival season boost
        if current_date.month in [10, 11]:
            base += 4

        # Random variation
        units_sold = max(1, base + random.randint(-2, 3))

        records.append({
            "date": current_date.strftime("%Y-%m-%d"),
            "product_id": product_id,
            "product_name": product_name,
            "units_sold": units_sold
        })

    current_date += timedelta(days=1)

df = pd.DataFrame(records)

df.to_csv(
    "app/forecasting/sales_history.csv",
    index=False
)

print("Dataset Generated Successfully!")
print(df.head())
print(f"\nTotal Records: {len(df)}")