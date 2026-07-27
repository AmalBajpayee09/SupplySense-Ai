import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";

function SupplierPerformanceTable({ data }) {

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
                    Supplier Performance
                </Typography>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell sx={{ color: "#CBD5E1", fontWeight: 700 }}>
                                Supplier
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{ color: "#CBD5E1", fontWeight: 700 }}
                            >
                                Products
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{ color: "#CBD5E1", fontWeight: 700 }}
                            >
                                Stock
                            </TableCell>

                            <TableCell
                                align="right"
                                sx={{ color: "#CBD5E1", fontWeight: 700 }}
                            >
                                Inventory Value
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            data.map((supplier, index) => (

                                <TableRow
                                    key={index}
                                    hover
                                >

                                    <TableCell>

                                        {supplier.supplier_name}

                                    </TableCell>

                                    <TableCell align="center">

                                        {supplier.products_supplied}

                                    </TableCell>

                                    <TableCell align="center">

                                        {supplier.total_stock}

                                    </TableCell>

                                    <TableCell align="right">

                                        ${supplier.inventory_value.toLocaleString()}

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </CardContent>

        </Card>

    );

}

export default SupplierPerformanceTable;