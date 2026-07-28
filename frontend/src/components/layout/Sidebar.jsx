import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

const drawerWidth = 260;

const menuItems = [

    {
        text: "Dashboard",
        path: "/dashboard",
        icon: <DashboardRoundedIcon />
    },

    {
        text: "Products",
        path: "/products",
        icon: <CategoryRoundedIcon />
    },

    {
        text: "Inventory",
        path: "/inventory",
        icon: <InventoryRoundedIcon />
    },

    {
        text: "Forecast",
        path: "/forecast",
        icon: <AutoGraphRoundedIcon />
    },

    {
        text: "AI Assistant",
        path: "/ai",
        icon: <SmartToyRoundedIcon />
    },

    {
        text: "Power BI",
        icon: <AnalyticsIcon />,
        path: "/powerbi"
    }

];

function Sidebar() {

    return (

        <Drawer
            variant="permanent"
            sx={{

                width: drawerWidth,

                flexShrink: 0,

                "& .MuiDrawer-paper": {

                    width: drawerWidth,

                    background: "#111827",

                    borderRight: "1px solid #1F2937",

                    color: "#FFFFFF"

                }

            }}
        >

            <Logo />

            <Divider />

            <List sx={{ mt: 1 }}>

                {

                    menuItems.map((item) => (

                        <ListItemButton

                            key={item.text}

                            component={NavLink}

                            to={item.path}

                            sx={{

                                mx: 1.5,

                                my: .5,

                                borderRadius: 2,

                                color: "#fff",

                                "&.active": {

                                    background: "#7C4DFF"

                                },

                                "&:hover": {

                                    background: "#7C4DFF"

                                }

                            }}

                        >

                            <ListItemIcon

                                sx={{

                                    color: "inherit",

                                    minWidth: 42

                                }}

                            >

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText

                                primary={item.text}

                            />

                        </ListItemButton>

                    ))

                }

            </List>

            <Box sx={{ flexGrow: 1 }} />

            <Divider />

            <List>

                <ListItemButton

                    sx={{

                        mx: 1.5,

                        my: 1,

                        borderRadius: 2

                    }}

                >

                    <ListItemIcon
                        sx={{
                            color: "#EF4444"
                        }}
                    >

                        <LogoutRoundedIcon />

                    </ListItemIcon>

                    <ListItemText

                        primary="Logout"

                    />

                </ListItemButton>

            </List>

        </Drawer>

    );

}

export default Sidebar;