import { useState } from "react";

import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({
    onSend,
    loading
}) {

    const [question, setQuestion] = useState("");

    const MAX_LENGTH = 500;

    const handleSend = () => {

        const text = question.trim();

        if (!text || loading) return;

        onSend(text);

        setQuestion("");

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSend();

        }

    };

    return (

        <Box
            sx={{
                borderTop: "1px solid #ddd",
                pt: 2,
                mt: 2
            }}
        >

            <TextField
                fullWidth
                multiline
                minRows={2}
                maxRows={6}
                placeholder="Ask anything about inventory, products, forecasting or supply chain..."
                value={question}
                disabled={loading}
                onChange={(e) => {

                    if (e.target.value.length <= MAX_LENGTH) {

                        setQuestion(e.target.value);

                    }

                }}
                onKeyDown={handleKeyDown}
            />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={1.5}
            >

                <Typography
                    variant="caption"
                    color="text.secondary"
                >

                    {question.length} / {MAX_LENGTH}

                </Typography>

                <Button
                    variant="contained"
                    endIcon={
                        loading
                            ? <CircularProgress size={18} color="inherit" />
                            : <SendIcon />
                    }
                    disabled={
                        loading ||
                        question.trim().length === 0
                    }
                    onClick={handleSend}
                >

                    {loading ? "Thinking..." : "Send"}

                </Button>

            </Box>

        </Box>

    );

}