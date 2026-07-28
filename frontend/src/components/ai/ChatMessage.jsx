import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CodeIcon from "@mui/icons-material/Code";
import TableViewIcon from "@mui/icons-material/TableView";

import { useState } from "react";

export default function ChatMessage({

    type,
    message

}) {

    const [showSQL, setShowSQL] = useState(false);

    const [showTable, setShowTable] = useState(false);



    const copyAnswer = () => {

        navigator.clipboard.writeText(
            message.answer || message.text || ""
        );

    };



    if (type === "user") {

        return (

            <Box

                display="flex"

                justifyContent="flex-end"

                mb={2}

            >

                <Card
                    sx={{
                        maxWidth: "75%",
                        bgcolor: "primary.main",
                        color: "white"
                    }}
                >

                    <CardContent>

                        <Box

                            display="flex"

                            alignItems="center"

                            gap={1}

                        >

                            <Avatar>

                                <PersonIcon />

                            </Avatar>

                            <Typography>

                                {message.text}

                            </Typography>

                        </Box>

                    </CardContent>

                </Card>

            </Box>

        );

    }



    return (

        <Box

            display="flex"

            justifyContent="flex-start"

            mb={3}

        >

            <Card

                sx={{

                    width: "100%",

                    bgcolor: "#1e1e2f"

                }}

            >

                <CardContent>

                    <Box

                        display="flex"

                        justifyContent="space-between"

                        alignItems="center"

                    >

                        <Box

                            display="flex"

                            gap={1}

                            alignItems="center"

                        >

                            <Avatar

                                sx={{

                                    bgcolor: "secondary.main"

                                }}

                            >

                                <SmartToyIcon />

                            </Avatar>

                            <Typography variant="h6">

                                SupplySense AI

                            </Typography>

                        </Box>



                        <Tooltip title="Copy Answer">

                            <IconButton

                                color="primary"

                                onClick={copyAnswer}

                            >

                                <ContentCopyIcon />

                            </IconButton>

                        </Tooltip>

                    </Box>



                    <Typography

                        mt={2}

                        sx={{

                            whiteSpace: "pre-wrap"

                        }}

                    >

                        {message.answer}

                    </Typography>



                    {

                        message.generated_sql && (

                            <>

                                <Chip

                                    icon={<CodeIcon />}

                                    label={

                                        showSQL

                                            ? "Hide SQL"

                                            : "Show SQL"

                                    }

                                    onClick={() =>

                                        setShowSQL(!showSQL)

                                    }

                                    sx={{ mt: 2 }}

                                />



                                <Collapse

                                    in={showSQL}

                                >

                                    <Box

                                        mt={2}

                                        p={2}

                                        sx={{

                                            bgcolor: "#121212",

                                            borderRadius: 0.5,

                                            overflowX: "auto"

                                        }}

                                    >

                                        <Typography

                                            component="pre"

                                            sx={{

                                                fontSize: 13,

                                                whiteSpace: "pre-wrap"

                                            }}

                                        >

                                            {message.generated_sql}

                                        </Typography>

                                    </Box>

                                </Collapse>

                            </>

                        )

                    }



                    {

                        message.data &&

                        message.data.length > 0 && (

                            <>

                                <Chip

                                    icon={<TableViewIcon />}

                                    label={

                                        showTable

                                            ? "Hide Result"

                                            : "View Result"

                                    }

                                    sx={{ mt: 2, ml: 2 }}

                                    onClick={() =>

                                        setShowTable(!showTable)

                                    }

                                />



                                <Collapse

                                    in={showTable}

                                >

                                    <TableContainer

                                        sx={{

                                            mt: 2,

                                            maxHeight: 300

                                        }}

                                    >

                                        <Table stickyHeader>

                                            <TableHead>

                                                <TableRow>

                                                    {

                                                        Object.keys(

                                                            message.data[0]

                                                        ).map(

                                                            (key) => (

                                                                <TableCell

                                                                    key={key}

                                                                >

                                                                    {key}

                                                                </TableCell>

                                                            )

                                                        )

                                                    }

                                                </TableRow>

                                            </TableHead>



                                            <TableBody>

                                                {

                                                    message.data.map(

                                                        (row, index) => (

                                                            <TableRow

                                                                key={index}

                                                            >

                                                                {

                                                                    Object.values(

                                                                        row

                                                                    ).map(

                                                                        (

                                                                            value,

                                                                            idx

                                                                        ) => (

                                                                            <TableCell

                                                                                key={idx}

                                                                            >

                                                                                {

                                                                                    String(

                                                                                        value

                                                                                    )

                                                                                }

                                                                            </TableCell>

                                                                        )

                                                                    )

                                                                }

                                                            </TableRow>

                                                        )

                                                    )

                                                }

                                            </TableBody>

                                        </Table>

                                    </TableContainer>

                                </Collapse>

                            </>

                        )

                    }



                </CardContent>

            </Card>

        </Box>

    );

}