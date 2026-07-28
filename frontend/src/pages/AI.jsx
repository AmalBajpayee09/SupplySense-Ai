import { useEffect, useRef, useState } from "react";

import {
    Alert,
    Box,
    Button,
    Paper,
    Snackbar,
    Stack,
    Typography
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import PageHeader from "../components/common/PageHeader";

import ChatInput from "../components/ai/ChatInput";
import ChatMessage from "../components/ai/ChatMessage";
import TypingIndicator from "../components/ai/TypingIndicator";

import aiService from "../services/aiService";

export default function AI() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const bottomRef = useRef(null);



    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);



    const handleSend = async (question) => {

        const userMessage = {

            type: "user",

            text: question

        };



        setMessages((prev) => [

            ...prev,

            userMessage

        ]);



        setLoading(true);



        try {

            const response = await aiService.askAI(question);



            setMessages((prev) => [

                ...prev,

                {

                    type: "ai",

                    ...response

                }

            ]);

        }

        catch (err) {

            setError(

                err?.response?.data?.detail ||

                "Unable to contact AI service."

            );

        }

        finally {

            setLoading(false);

        }

    };



    const clearChat = () => {

        setMessages([]);

    };



    return (

        <Box>

            <PageHeader

                title="SupplySense AI"

                subtitle="Ask questions about products, inventory, sales and forecasting."

            />



            <Paper

                elevation={3}

                sx={{

                    p: 3,

                    borderRadius: 3,

                    minHeight: "80vh",

                    display: "flex",

                    flexDirection: "column"

                }}

            >

                <Stack

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                    mb={2}

                >

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        AI Assistant

                    </Typography>



                    <Button

                        color="error"

                        variant="outlined"

                        startIcon={<DeleteIcon />}

                        onClick={clearChat}

                        disabled={messages.length === 0}

                    >

                        Clear Chat

                    </Button>

                </Stack>






                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        mb: 2,
                        pr: 1
                    }}
                >
                    {messages.length === 0 && !loading && (
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                py: 10
                            }}
                        >
                            <SmartToyIcon
                                color="primary"
                                sx={{
                                    fontSize: 80,
                                    mb: 2
                                }}
                            />

                            <Typography
                                variant="h5"
                                fontWeight={700}
                                gutterBottom
                            >
                                Welcome to SupplySense AI
                            </Typography>

                            <Typography
                                color="text.secondary"
                                align="center"
                                maxWidth={650}
                            >
                                Ask questions about inventory, products, suppliers,
                                forecasting, stock levels, sales trends, or anything stored
                                in your database. The AI will generate SQL, retrieve the
                                required data, and explain the results in simple language.
                            </Typography>
                        </Box>
                    )}

                    {messages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            type={message.type}
                            message={message}
                        />
                    ))}

                    {loading && <TypingIndicator />}

                    <div ref={bottomRef} />
                </Box>

                <ChatInput
                    onSend={handleSend}
                    loading={loading}
                />
            </Paper >

            <Snackbar
                open={Boolean(error)}
                autoHideDuration={5000}
                onClose={() => setError("")}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
            >
                <Alert
                    severity="error"
                    variant="filled"
                    onClose={() => setError("")}
                >
                    {error}
                </Alert>
            </Snackbar>
        </Box >
    );
}