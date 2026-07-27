import {
    Card,
    CardContent,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Paper,
    Typography
} from "@mui/material";

function DataTable({

    title,

    columns,

    rows,

    emptyMessage = "No data available"

}) {

    return (

        <Card
            sx={{
                background: "#162033",
                borderRadius: 4
            }}
        >

            <CardContent>

                {

                    title && (

                        <Typography
                            variant="h6"
                            mb={2}
                            fontWeight={700}
                        >

                            {title}

                        </Typography>

                    )

                }

                <TableContainer
                    component={Paper}
                    sx={{
                        background: "transparent",
                        boxShadow: "none"
                    }}
                >

                    <Table>

                        <TableHead>

                            <TableRow>

                                {

                                    columns.map((column) => (

                                        <TableCell

                                            key={column.field}

                                            align={column.align || "left"}

                                            sx={{

                                                color: "#CBD5E1",

                                                fontWeight: 700,

                                                borderBottom: "1px solid rgba(255,255,255,0.08)"

                                            }}

                                        >

                                            {column.headerName}

                                        </TableCell>

                                    ))

                                }

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {

                                rows.length === 0 ? (

                                    <TableRow>

                                        <TableCell
                                            colSpan={columns.length}
                                            align="center"
                                        >

                                            {emptyMessage}

                                        </TableCell>

                                    </TableRow>

                                ) : (

                                    rows.map((row, index) => (

                                        <TableRow
                                            hover
                                            key={index}
                                        >

                                            {

                                                columns.map((column) => (

                                                    <TableCell

                                                        key={column.field}

                                                        align={column.align || "left"}

                                                        sx={{
                                                            borderBottom:
                                                                "1px solid rgba(255,255,255,0.05)"
                                                        }}

                                                    >

                                                        {

                                                            column.renderCell

                                                                ? column.renderCell(row)

                                                                : row[column.field]

                                                        }

                                                    </TableCell>

                                                ))

                                            }

                                        </TableRow>

                                    ))

                                )

                            }

                        </TableBody>

                    </Table>

                </TableContainer>

            </CardContent>

        </Card>

    );

}

export default DataTable;