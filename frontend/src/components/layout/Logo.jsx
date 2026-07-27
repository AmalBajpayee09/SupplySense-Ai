import { Box, Typography } from "@mui/material";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";

function Logo() {

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 2
            }}
        >

            <Inventory2RoundedIcon
                sx={{
                    color: "#7C4DFF",
                    fontSize: 34
                }}
            />

            <Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.1
                    }}
                >
                    SupplySense AI
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        color: "#94A3B8"
                    }}
                >
                    Supply Chain Intelligence
                </Typography>

            </Box>

        </Box>

    );

}

export default Logo;