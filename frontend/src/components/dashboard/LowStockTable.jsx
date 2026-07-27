import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip
} from "@mui/material";

function LowStockTable({ data }) {

    return (

        <Card
            sx={{
                background: "#162033",
                borderRadius: 4,
                mt: 3
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    mb={2}
                >

                    Low Stock Products

                </Typography>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell
                                sx={{
                                    color: "#CBD5E1",
                                    fontWeight: 700
                                }}
                            >
                                Product
                            </TableCell>

                            <TableCell
                                sx={{
                                    color: "#CBD5E1",
                                    fontWeight: 700
                                }}
                                align="center"
                            >
                                Current Stock
                            </TableCell>

                            <TableCell
                                sx={{
                                    color: "#CBD5E1",
                                    fontWeight: 700
                                }}
                                align="center"
                            >
                                Reorder Level
                            </TableCell>

                            <TableCell
                                sx={{
                                    color: "#CBD5E1",
                                    fontWeight: 700
                                }}
                                align="center"
                            >
                                Status
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            data.length === 0 ? (

                                <TableRow>

                                    <TableCell
                                        colSpan={4}
                                        align="center"
                                    >

                                        No low stock products found.

                                    </TableCell>

                                </TableRow>

                            ) : (

                                data.map((item, index) => (

                                    <TableRow
                                        key={index}
                                        hover
                                    >

                                        <TableCell>

                                            {item.product_name}

                                        </TableCell>

                                        <TableCell
                                            align="center"
                                        >

                                            {item.current_stock}

                                        </TableCell>

                                        <TableCell
                                            align="center"
                                        >

                                            {item.reorder_level}

                                        </TableCell>

                                        <TableCell
                                            align="center"
                                        >

                                            <Chip

                                                label={
                                                    item.current_stock === 0
                                                        ? "Critical"
                                                        : "Low"
                                                }

                                                color={
                                                    item.current_stock === 0
                                                        ? "error"
                                                        : "warning"
                                                }

                                                size="small"

                                            />

                                        </TableCell>

                                    </TableRow>

                                ))

                            )

                        }

                    </TableBody>

                </Table>

            </CardContent>

        </Card>

    );

}

export default LowStockTable;