import { useState } from "react";

import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    CircularProgress,
    Alert,
    Divider
} from "@mui/material";

import PageHeader from "../components/common/PageHeader";
import ForecastChart from "../components/charts/ForecastChart";
import forecastService from "../services/forecastService";

export default function Forecast() {

    const today = new Date();

    const [form, setForm] = useState({
        product_id: "",
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
        weekday: today.getDay()
    });

    const [prediction, setPrediction] = useState(null);

    const [historical, setHistorical] = useState([]);

    const [forecast, setForecast] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const handleChange = (event) => {

        setForm({

            ...form,

            [event.target.name]: event.target.value

        });

    };



    const generateForecast = async () => {

        if (!form.product_id) {

            setError("Please enter Product ID");

            return;

        }

        try {

            setLoading(true);

            setError("");



            const predictionResponse = await forecastService.predict({

                product_id: Number(form.product_id),

                year: Number(form.year),

                month: Number(form.month),

                day: Number(form.day),

                weekday: Number(form.weekday)

            });



            setPrediction(predictionResponse);



            const comparison = await forecastService.getComparison(

                Number(form.product_id)

            );



            setHistorical(comparison.historical);

            setForecast(comparison.forecast);

        }

        catch (err) {

            console.error(err);

            setError("Unable to generate forecast.");

        }

        finally {

            setLoading(false);

        }

    };



    return (

        <>

            <PageHeader

                title="Sales Forecast"

                subtitle="AI Powered Sales Prediction"

            />



            <Grid container spacing={3}>



                <Grid item xs={12} md={4}>

                    <Card>

                        <CardContent>

                            <Typography

                                variant="h6"

                                gutterBottom

                            >

                                Forecast Input

                            </Typography>



                            <TextField

                                fullWidth

                                label="Product ID"

                                name="product_id"

                                margin="normal"

                                value={form.product_id}

                                onChange={handleChange}

                            />



                            <TextField

                                fullWidth

                                label="Year"

                                name="year"

                                margin="normal"

                                value={form.year}

                                onChange={handleChange}

                            />



                            <TextField

                                fullWidth

                                label="Month"

                                name="month"

                                margin="normal"

                                value={form.month}

                                onChange={handleChange}

                            />



                            <TextField

                                fullWidth

                                label="Day"

                                name="day"

                                margin="normal"

                                value={form.day}

                                onChange={handleChange}

                            />



                            <TextField

                                fullWidth

                                label="Weekday"

                                name="weekday"

                                margin="normal"

                                value={form.weekday}

                                onChange={handleChange}

                            />



                            <Button

                                fullWidth

                                sx={{ mt: 2 }}

                                variant="contained"

                                onClick={generateForecast}

                                disabled={loading}

                            >

                                Generate Forecast

                            </Button>

                        </CardContent>

                    </Card>

                </Grid>



                <Grid item xs={12} md={8}>

                    <Card>

                        <CardContent>

                            <Typography

                                variant="h6"

                                gutterBottom

                            >

                                Prediction

                            </Typography>



                            <Divider sx={{ mb: 2 }} />



                            {loading && (

                                <Box

                                    display="flex"

                                    justifyContent="center"

                                    py={5}

                                >

                                    <CircularProgress />

                                </Box>

                            )}



                            {error && (

                                <Alert severity="error">

                                    {error}

                                </Alert>

                            )}



                            {!loading && prediction && (

                                <Box>

                                    <Typography variant="h4">

                                        {prediction.predicted_sales}

                                    </Typography>

                                    <Typography>

                                        Predicted Units Sold

                                    </Typography>

                                    <Typography sx={{ mt: 2 }}>

                                        Product ID : {prediction.product_id}

                                    </Typography>

                                </Box>

                            )}

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>



            <Grid container spacing={3} sx={{ mt: 1 }}>

                <Grid item xs={12}>

                    <ForecastChart
                        historical={historical}
                        forecast={forecast}
                    />

                </Grid>

            </Grid>



            <Grid container spacing={3} sx={{ mt: 1 }}>

                <Grid item xs={12} md={6}>

                    <Card>

                        <CardContent>

                            <Typography
                                variant="h6"
                                gutterBottom
                            >
                                Historical Sales
                            </Typography>

                            <Divider sx={{ mb: 2 }} />

                            <Box
                                sx={{
                                    maxHeight: 350,
                                    overflow: "auto"
                                }}
                            >

                                {historical.length === 0 && (

                                    <Typography
                                        color="text.secondary"
                                    >
                                        No history available.
                                    </Typography>

                                )}

                                {historical.map((item, index) => (

                                    <Box
                                        key={index}
                                        display="flex"
                                        justifyContent="space-between"
                                        py={1}
                                        borderBottom="1px solid rgba(0,0,0,0.08)"
                                    >

                                        <Typography>

                                            {item.date}

                                        </Typography>

                                        <Typography fontWeight={600}>

                                            {item.units_sold}

                                        </Typography>

                                    </Box>

                                ))}

                            </Box>

                        </CardContent>

                    </Card>

                </Grid>



                <Grid item xs={12} md={6}>

                    <Card>

                        <CardContent>

                            <Typography
                                variant="h6"
                                gutterBottom
                            >
                                Forecast (Next 30 Days)
                            </Typography>

                            <Divider sx={{ mb: 2 }} />

                            <Box
                                sx={{
                                    maxHeight: 350,
                                    overflow: "auto"
                                }}
                            >

                                {forecast.length === 0 && (

                                    <Typography
                                        color="text.secondary"
                                    >
                                        No forecast generated.
                                    </Typography>

                                )}

                                {forecast.map((item, index) => (

                                    <Box
                                        key={index}
                                        display="flex"
                                        justifyContent="space-between"
                                        py={1}
                                        borderBottom="1px solid rgba(0,0,0,0.08)"
                                    >

                                        <Typography>

                                            {item.date}

                                        </Typography>

                                        <Typography
                                            color="primary"
                                            fontWeight={700}
                                        >

                                            {item.predicted_sales}

                                        </Typography>

                                    </Box>

                                ))}

                            </Box>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </>

    );

}
