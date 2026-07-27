import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

function DashboardLayout() {

    return (

        <Box
            sx={{
                display: "flex"
            }}
        >

            <Sidebar />

            <Box
                sx={{
                    flexGrow: 1,
                    background: "#0F172A",
                    minHeight: "100vh",
                    p: 4
                }}
            >

                <TopNavbar />

                <Outlet />

            </Box>

        </Box>

    );

}

export default DashboardLayout;