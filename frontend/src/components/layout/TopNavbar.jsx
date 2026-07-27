import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
    TextField,
    InputAdornment
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

function TopNavbar() {

    return (

        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "transparent",
                mb: 4
            }}
        >

            <Toolbar
                disableGutters
                sx={{
                    justifyContent: "space-between"
                }}
            >

                <Box>

                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >

                        Executive Dashboard

                    </Typography>

                    <Typography
                        sx={{
                            color: "#94A3B8",
                            mt: .5
                        }}
                    >

                        Real-time inventory and supply chain analytics.

                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                    }}
                >

                    <TextField

                        size="small"

                        placeholder="Search..."

                        sx={{
                            width: 260
                        }}

                        InputProps={{

                            startAdornment: (

                                <InputAdornment position="start">

                                    <SearchRoundedIcon />

                                </InputAdornment>

                            )

                        }}

                    />

                    <IconButton
                        sx={{
                            background: "#1E293B"
                        }}
                    >

                        <CalendarMonthRoundedIcon />

                    </IconButton>

                    <IconButton
                        sx={{
                            background: "#1E293B"
                        }}
                    >

                        <NotificationsNoneRoundedIcon />

                    </IconButton>

                    <Avatar
                        sx={{
                            bgcolor: "#7C4DFF"
                        }}
                    >

                        A

                    </Avatar>

                </Box>

            </Toolbar>

        </AppBar>

    );

}

export default TopNavbar;