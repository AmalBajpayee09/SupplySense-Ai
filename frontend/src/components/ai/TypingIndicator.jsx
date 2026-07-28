import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function TypingIndicator() {
    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            mb={2}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "#1e1e2f",
                    borderRadius: 3,
                    px: 2,
                    py: 1.5,
                    maxWidth: 320
                }}
            >
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <SmartToyIcon />
                </Avatar>

                <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                        SupplySense AI
                    </Typography>

                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        mt={0.5}
                    >
                        <CircularProgress size={16} />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Thinking...
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}