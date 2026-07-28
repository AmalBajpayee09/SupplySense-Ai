import { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import DataTable from "../components/common/DataTable";
import InventoryFormDialog from "../components/forms/InventoryFormDialog";
import inventoryService from "../services/inventoryService";

export default function Inventory() {
    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [openDialog, setOpenDialog] = useState(false);

    const [editingInventory, setEditingInventory] = useState(null);

    useEffect(() => {
        loadInventory();
    }, []);

    useEffect(() => {
        setFilteredRows(
            rows.filter(
                (r) =>
                    String(r.product_id).includes(search) ||
                    String(r.warehouse_id).includes(search) ||
                    String(r.supplier_id).includes(search)
            )
        );
    }, [rows, search]);

    async function loadInventory() {
        try {
            setLoading(true);
            const d = await inventoryService.getInventory();
            setRows(d);
            setFilteredRows(d);
        } catch (e) {
            console.error(e);
            setError("Unable to load inventory.");
        } finally {
            setLoading(false);
        }
    }

    async function handleSave(data) {
        if (editingInventory) {
            await inventoryService.updateInventory(
                editingInventory.inventory_id,
                data
            );
        } else {
            await inventoryService.createInventory(data);
        }

        setOpenDialog(false);
        setEditingInventory(null);
        loadInventory();
    }

    async function handleDelete(id) {
        if (!window.confirm("Delete inventory?")) return;

        await inventoryService.deleteInventory(id);
        loadInventory();
    }

    const columns = [
        {
            field: "inventory_id",
            headerName: "ID",
        },
        {
            field: "product_id",
            headerName: "Product ID",
        },
        {
            field: "warehouse_id",
            headerName: "Warehouse ID",
        },
        {
            field: "supplier_id",
            headerName: "Supplier ID",
        },
        {
            field: "current_stock",
            headerName: "Current Stock",
        },
        {
            field: "reserved_stock",
            headerName: "Reserved",
        },
        {
            field: "reorder_level",
            headerName: "Reorder Level",
        },
        {
            field: "last_restocked",
            headerName: "Last Restocked",
        },
        {
            field: "actions",
            headerName: "Actions",
            renderCell: (row) => (
                <Box display="flex" gap={1}>
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => {
                            setEditingInventory(row);
                            setOpenDialog(true);
                        }}
                    >
                        Edit
                    </Button>

                    <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(row.inventory_id)}
                    >
                        Delete
                    </Button>
                </Box>
            ),
        },
    ];

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={10}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <>
            <PageHeader
                title="Inventory"
                subtitle="Manage inventory"
            />

            <Box display="flex" justifyContent="space-between" mb={3}>
                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Button
                    variant="contained"
                    startIcon={<AddRoundedIcon />}
                    onClick={() => {
                        setEditingInventory(null);
                        setOpenDialog(true);
                    }}
                >
                    Add Inventory
                </Button>
            </Box>

            <DataTable
                title="Inventory"
                columns={columns}
                rows={filteredRows}
            />

            <InventoryFormDialog
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false);
                    setEditingInventory(null);
                }}
                onSubmit={handleSave}
                initialData={editingInventory}
            />
        </>
    );
}