import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import powerbiPreview from "../assets/powerbi-preview.jpeg";
import PageHeader from "../components/common/PageHeader";

const EMBED_URL = "";

export default function PowerBI() {

    const handleOpenDashboard = () => {

        if (EMBED_URL) {

            window.open(EMBED_URL, "_blank");

        }

    };

    return (

        <Box>

            <PageHeader

                title="Power BI Dashboard"

                subtitle="Interactive analytics and business intelligence for SupplySense AI."

            />

            <Grid container spacing={3}>

                <Grid item xs={12}>

                    <Alert severity="info">

                        Power BI embedding is currently disabled because this project is
                        using a free Power BI account. Once a Pro or organizational
                        workspace is available, simply replace the <b>EMBED_URL</b> and the
                        dashboard will be embedded here.

                    </Alert>

                </Grid>

                <Grid item xs={12} md={8}>

                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: 3,
                            overflow: "hidden"
                        }}
                    >

                        <Box
                            sx={{
                                position: "relative",
                                height: 650,
                                overflow: "hidden"
                            }}
                        >

                            <Box
                                component="img"
                                src={powerbiPreview}
                                alt="Power BI Dashboard Preview"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />

                            <Chip
                                label="Preview"
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: 20,
                                    right: 20
                                }}
                            />

                        

                        <Stack
                            spacing={2}
                            alignItems="center"
                        >

                            <AnalyticsIcon
                                sx={{
                                    fontSize: 90,
                                    color: "#8b5cf6"
                                }}
                            />

                            <Typography
                                variant="h5"
                                fontWeight={700}
                            >

                                Power BI Dashboard

                            </Typography>

                            <Typography
                                color="text.secondary"
                                align="center"
                                maxWidth={500}
                            >

                                Your interactive business dashboard will appear here after
                                replacing the embed URL with your published Power BI report.

                            </Typography>

                            <Button

                                variant="contained"

                                startIcon={<OpenInNewIcon />}

                                disabled={!EMBED_URL}

                                onClick={handleOpenDashboard}

                            >

                                Open Dashboard

                            </Button>

                        </Stack>

                    </Box>

                </Paper>

            </Grid>

            <Grid item xs={12} md={4}>

                <Stack spacing={2}>

                    <Card>

                        <CardContent>

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >

                                <DashboardIcon color="primary" />

                                <Typography variant="h6">

                                    Dashboard Status

                                </Typography>

                            </Stack>

                            <Divider sx={{ my: 2 }} />

                            <Chip
                                label="Ready for Embed"
                                color="success"
                            />

                            <Typography mt={2}>

                                Replace the <b>EMBED_URL</b> constant once your Power BI
                                report is published.

                            </Typography>

                        </CardContent>

                    </Card>

                    <Card>

                        <CardContent>

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >

                                <InsightsIcon color="secondary" />

                                <Typography variant="h6">

                                    Planned Analytics

                                </Typography>

                            </Stack>

                            <Divider sx={{ my: 2 }} />

                            <Typography>

                                • Executive KPI Dashboard

                            </Typography>

                            <Typography>

                                • Inventory Overview

                            </Typography>

                            <Typography>

                                • Warehouse Analysis

                            </Typography>

                            <Typography>

                                • Brand Performance

                            </Typography>

                            <Typography>

                                • Supplier Analysis

                            </Typography>

                            <Typography>

                                • Inventory Value

                            </Typography>

                            <Typography>

                                • Stock Distribution

                            </Typography>

                            <Typography>

                                • Forecast Insights

                            </Typography>

                        </CardContent>

                    </Card>

                </Stack>

            </Grid>

        </Grid>

        </Box >

    );

}