import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function InventoryFormDialog({
    open,
    onClose,
    onSubmit,
    initialData = null,
}) {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        } else {
            reset({
                product_id: "",
                warehouse_id: "",
                supplier_id: "",
                current_stock: 0,
                reserved_stock: 0,
                reorder_level: 10,
                last_restocked: new Date().toISOString().split("T")[0],
            });
        }
    }, [initialData, reset]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>
                {initialData ? "Edit Inventory" : "Add Inventory"}
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Product ID"
                                type="number"
                                {...register("product_id", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Warehouse ID"
                                type="number"
                                {...register("warehouse_id", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Supplier ID"
                                type="number"
                                {...register("supplier_id", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Current Stock"
                                type="number"
                                {...register("current_stock", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Reserved Stock"
                                type="number"
                                {...register("reserved_stock", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Reorder Level"
                                type="number"
                                {...register("reorder_level", { required: true })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Last Restocked"
                                InputLabelProps={{ shrink: true }}
                                {...register("last_restocked", { required: true })}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>

                    <Button type="submit" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}