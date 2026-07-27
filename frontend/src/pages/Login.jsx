import { useState } from "react";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
    CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            const data = await authService.login({

                email,

                password

            });

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            navigate("/dashboard");

        }

        catch (err) {

            setError(

                err.response?.data?.detail ||

                "Invalid email or password."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <Container
            maxWidth="sm"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center"
            }}
        >

            <Paper
                elevation={5}
                sx={{
                    p: 5,
                    width: "100%"
                }}
            >

                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                >

                    SupplySense AI

                </Typography>

                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        mb: 4
                    }}
                >

                    Login to continue

                </Typography>

                {

                    error && (

                        <Alert
                            severity="error"
                            sx={{
                                mb: 2
                            }}
                        >

                            {error}

                        </Alert>

                    )

                }

                <Box
                    component="form"
                    onSubmit={handleLogin}
                >

                    <TextField

                        fullWidth

                        margin="normal"

                        label="Email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                    />

                    <TextField

                        fullWidth

                        margin="normal"

                        label="Password"

                        type="password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }

                    />

                    <Button

                        fullWidth

                        variant="contained"

                        type="submit"

                        sx={{
                            mt: 3,
                            py: 1.5
                        }}

                        disabled={loading}

                    >

                        {

                            loading

                                ?

                                <CircularProgress
                                    size={25}
                                    color="inherit"
                                />

                                :

                                "Login"

                        }

                    </Button>

                </Box>

            </Paper>

        </Container>

    );

}