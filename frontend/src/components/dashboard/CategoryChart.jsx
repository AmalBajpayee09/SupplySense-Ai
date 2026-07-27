import { Card, CardContent, Typography } from "@mui/material";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const COLORS = [
    "#7C4DFF",
    "#06B6D4",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#14B8A6"
];

function CategoryChart({ data }) {

    return (

        <Card
            sx={{
                background: "#162033",
                borderRadius: 4,
                height: "100%"
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    mb={2}
                >

                    Category Distribution

                </Typography>

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <PieChart>

                        <Pie

                            data={data}

                            dataKey="inventory_value"

                            nameKey="category_name"

                            outerRadius={110}

                            label

                        >

                            {

                                data.map((entry, index) => (

                                    <Cell

                                        key={index}

                                        fill={COLORS[index % COLORS.length]}

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}

export default CategoryChart;