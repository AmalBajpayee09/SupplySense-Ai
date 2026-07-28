import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend
} from "recharts";

import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

export default function ForecastChart({
    historical = [],
    forecast = []
}) {

    const historyData = historical.map((item) => ({
        date: item.date,
        historical: item.units_sold,
        predicted: null
    }));

    const forecastData = forecast.map((item) => ({
        date: item.date,
        historical: null,
        predicted: item.predicted_sales
    }));

    const chartData = [...historyData, ...forecastData];

    if (chartData.length === 0) {
        return (
            <Card
                sx={{
                    mt: 4,
                    borderRadius: 3,
                    bgcolor: "background.paper"
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            py: 6,
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="h2">
                            📈
                        </Typography>

                        <Typography
                            variant="h6"
                            fontWeight={600}
                            mt={2}
                        >
                            Generate Forecast
                        </Typography>

                        <Typography
                            color="text.secondary"
                        >
                            Run a prediction to visualize sales trends.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card
            sx={{
                mt: 4,
                borderRadius: 3,
                boxShadow: 3
            }}
        >
            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                >
                    📈 Sales Forecast Trend
                </Typography>

                <ResponsiveContainer
                    width={2000}
                    height={550}
                >
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 10,
                            bottom: 70
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            opacity={0.3}
                        />

                        <XAxis
                            dataKey="date"
                            angle={-30}
                            textAnchor="end"
                            height={70}
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            tick={{ fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: 10,
                                border: "none"
                            }}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={40}
                        />

                        <Line
                            type="monotone"
                            dataKey="historical"
                            name="Historical Sales"
                            stroke="#2196f3"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />

                        <Line
                            type="monotone"
                            dataKey="predicted"
                            name="Forecast"
                            stroke="#66bb6a"
                            strokeWidth={3}
                            strokeDasharray="6 6"
                            dot={false}
                            activeDot={{ r: 6 }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </CardContent>
        </Card>
    );
}