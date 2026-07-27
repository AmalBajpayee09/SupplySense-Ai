import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import KPICard from "../components/dashboard/KPICard";
import InventoryTrendChart from "../components/dashboard/InventoryTrendChart";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

import dashboardService from "../services/dashboardService";
import CategoryChart from "../components/dashboard/CategoryChart";
import LowStockTable from "../components/dashboard/LowStockTable";
import SupplierPerformanceTable from "../components/dashboard/SupplierPerformanceTable";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const data = await dashboardService.getDashboard();

                setDashboard(data);

            }

            catch (err) {

                console.error(err);

                setError("Failed to load dashboard data.");

            }

            finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    if (loading) {

        return (

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="70vh"
            >

                <CircularProgress />

            </Box>

        );

    }

    if (error) {

        return <Alert severity="error">{error}</Alert>;

    }

    return (

        <Grid
            container
            spacing={3}
        >

            <Grid size={{ xs: 12, md: 3 }}>

                <KPICard

                    title="Products"

                    value={dashboard.summary.total_products}

                    subtitle="Live Data"

                    color="#7C4DFF"

                    icon={<CategoryRoundedIcon />}

                />

            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>

                <KPICard

                    title="Inventory"

                    value={dashboard.summary.total_inventory}

                    subtitle="Live Data"

                    color="#06B6D4"

                    icon={<Inventory2RoundedIcon />}

                />

            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>

                <KPICard

                    title="Suppliers"

                    value={dashboard.summary.total_suppliers}

                    subtitle="Live Data"

                    color="#22C55E"

                    icon={<WarehouseRoundedIcon />}

                />

            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>

                <KPICard

                    title="Inventory Value"

                    value={`$${dashboard.inventory_value.total_inventory_value.toLocaleString()}`}

                    subtitle="Live Data"

                    color="#F59E0B"

                    icon={<AttachMoneyRoundedIcon />}

                />

            </Grid>

            <Grid size={{ xs: 12, lg: 8 }}>

                <InventoryTrendChart />

            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>

                <CategoryChart

                    data={dashboard.category_summary}

                />

            </Grid>
            <Grid size={12}>

                <LowStockTable

                    data={dashboard.low_stock}

                />

            </Grid>
            <Grid size={12}>

                <SupplierPerformanceTable

                    data={dashboard.supplier_performance}

                />

            </Grid>

        </Grid>

    );

}

export default Dashboard;