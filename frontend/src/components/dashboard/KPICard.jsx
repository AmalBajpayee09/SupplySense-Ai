import { Card, CardContent, Typography, Box } from "@mui/material";

function KPICard({

    title,
    value,
    subtitle,
    icon,
    color = "#7C4DFF"

}) {

    return (

        <Card
            sx={{

                background: "#162033",

                borderRadius: 4,

                height: 150,

                border: "1px solid rgba(255,255,255,0.06)",

                transition: ".25s",

                "&:hover": {

                    transform: "translateY(-4px)",

                    boxShadow: `0 0 25px ${color}30`

                }

            }}
        >

            <CardContent>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Typography
                        color="#94A3B8"
                    >

                        {title}

                    </Typography>

                    <Box
                        sx={{

                            width: 48,

                            height: 38,

                            borderRadius: "30%",

                            background: color,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center"

                        }}
                    >

                        {icon}

                    </Box>

                </Box>

                <Typography
                    variant="h4"
                    mt={3}
                    fontWeight={700}
                >

                    {value}

                </Typography>

                <Typography
                    color="#22C55E"
                    mt={1}
                >

                    {subtitle}

                </Typography>

            </CardContent>

        </Card>

    );

}

export default KPICard;