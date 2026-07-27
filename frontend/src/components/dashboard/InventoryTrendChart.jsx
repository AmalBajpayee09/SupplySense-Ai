import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

const data = [

    { day: "Mon", value: 120 },

    { day: "Tue", value: 180 },

    { day: "Wed", value: 160 },

    { day: "Thu", value: 230 },

    { day: "Fri", value: 280 },

    { day: "Sat", value: 260 },

    { day: "Sun", value: 310 }

];

function InventoryTrendChart() {

    return (

        <Card
            sx={{
                mt: 4,
                background: "#162033",
                borderRadius: 4
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    mb={2}
                >

                    Inventory Trend

                </Typography>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart
                        data={data}
                    >

                        <CartesianGrid
                            stroke="#243244"
                        />

                        <XAxis
                            dataKey="day"
                        />

                        <YAxis />

                        <Tooltip />

                        <Line

                            type="monotone"

                            dataKey="value"

                            stroke="#7C4DFF"

                            strokeWidth={4}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}

export default InventoryTrendChart;