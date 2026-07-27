import { useEffect, useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
    Grid
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import categoryService from "../../services/categoryService";
import brandService from "../../services/brandService";

function ProductFormDialog({

    open,
    onClose,
    onSubmit,
    initialData = null

}) {

    const {

        control,
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm();

    const [categories, setCategories] = useState([]);

    const [brands, setBrands] = useState([]);

    useEffect(() => {

        loadDropdowns();

    }, []);

    useEffect(() => {

        if (initialData) {

            reset(initialData);

        }

        else {

            reset({

                tenant_id: 1,

                category_id: "",

                brand_id: "",

                sku: "",

                product_name: "",

                unit_price: "",

                cost_price: "",

                reorder_level: 10,

                status: "ACTIVE"

            });

        }

    }, [initialData, reset]);

    async function loadDropdowns() {

        try {

            const categoryData =
                await categoryService.getCategories();

            const brandData =
                await brandService.getBrands();

            setCategories(categoryData);

            setBrands(brandData);

        }

        catch (err) {

            console.error(err);

        }

    }

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="md"

        >

            <DialogTitle>

                {

                    initialData

                        ? "Edit Product"

                        : "Add Product"

                }

            </DialogTitle>

            <form

                onSubmit={handleSubmit(onSubmit)}

            >

                <DialogContent>

                    <Grid
                        container
                        spacing={2}
                    >

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="Product Name"

                                {...register("product_name", {

                                    required: "Required"

                                })}

                                error={!!errors.product_name}

                                helperText={
                                    errors.product_name?.message
                                }

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <TextField

                                fullWidth

                                label="SKU"

                                {...register("sku", {

                                    required: "Required"

                                })}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <Controller

                                name="category_id"

                                control={control}

                                rules={{
                                    required: true
                                }}

                                render={({ field }) => (

                                    <TextField

                                        {...field}

                                        fullWidth

                                        select

                                        label="Category"

                                    >

                                        {

                                            categories.map((category) => (

                                                <MenuItem

                                                    key={category.category_id}

                                                    value={category.category_id}

                                                >

                                                    {category.category_name}

                                                </MenuItem>

                                            ))

                                        }

                                    </TextField>

                                )}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>

                            <Controller

                                name="brand_id"

                                control={control}

                                rules={{
                                    required: true
                                }}

                                render={({ field }) => (

                                    <TextField

                                        {...field}

                                        fullWidth

                                        select

                                        label="Brand"

                                    >

                                        {

                                            brands.map((brand) => (

                                                <MenuItem

                                                    key={brand.brand_id}

                                                    value={brand.brand_id}

                                                >

                                                    {brand.brand_name}

                                                </MenuItem>

                                            ))

                                        }

                                    </TextField>

                                )}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>

                            <TextField

                                fullWidth

                                type="number"

                                label="Unit Price"

                                {...register("unit_price", {

                                    required: true

                                })}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>

                            <TextField

                                fullWidth

                                type="number"

                                label="Cost Price"

                                {...register("cost_price", {

                                    required: true

                                })}

                            />

                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>

                            <TextField

                                fullWidth

                                type="number"

                                label="Reorder Level"

                                {...register("reorder_level", {

                                    required: true

                                })}

                            />

                        </Grid>

                        <Grid size={12}>

                            <Controller

                                name="status"

                                control={control}

                                render={({ field }) => (

                                    <TextField

                                        {...field}

                                        fullWidth

                                        select

                                        label="Status"

                                    >

                                        <MenuItem value="ACTIVE">

                                            ACTIVE

                                        </MenuItem>

                                        <MenuItem value="INACTIVE">

                                            INACTIVE

                                        </MenuItem>

                                    </TextField>

                                )}

                            />

                        </Grid>

                    </Grid>

                </DialogContent>

                <DialogActions>

                    <Button
                        onClick={onClose}
                    >

                        Cancel

                    </Button>

                    <Button

                        variant="contained"

                        type="submit"

                    >

                        Save

                    </Button>

                </DialogActions>

            </form>

        </Dialog>

    );

}

export default ProductFormDialog;