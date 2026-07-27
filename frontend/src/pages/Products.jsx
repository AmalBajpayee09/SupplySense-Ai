import { useEffect, useState } from "react";

import {
    Box,
    CircularProgress,
    Alert,
    Button
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import DataTable from "../components/common/DataTable";
import ProductFormDialog from "../components/forms/ProductFormDialog";

import productService from "../services/productService";
import categoryService from "../services/categoryService";
import brandService from "../services/brandService";

function Products() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [openDialog, setOpenDialog] = useState(false);

    const [editingProduct, setEditingProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {

        loadInitialData();

    }, []);

    useEffect(() => {

        const filtered = products.filter((product) =>

            product.product_name
                .toLowerCase()
                .includes(search.toLowerCase())

        );

        setFilteredProducts(filtered);

    }, [products, search]);


    async function loadInitialData() {

        try {

            setLoading(true);

            const [

                productData,

                categoryData,

                brandData

            ] = await Promise.all([

                productService.getProducts(),

                categoryService.getCategories(),

                brandService.getBrands()

            ]);

            setProducts(productData);

            setFilteredProducts(productData);

            setCategories(categoryData);

            setBrands(brandData);

        }

        catch (err) {

            console.error(err);

            setError("Unable to load products.");

        }

        finally {

            setLoading(false);

        }

    }

    async function loadProducts() {

        const data = await productService.getProducts();

        setProducts(data);

        setFilteredProducts(data);

    }

    async function handleSave(data) {

        try {

            if (editingProduct) {

                await productService.updateProduct(

                    editingProduct.product_id,

                    data

                );

            }

            else {

                await productService.createProduct(data);

            }

            setOpenDialog(false);

            setEditingProduct(null);

            loadProducts();

        }

        catch (err) {

            console.error(err);

            alert("Failed to save product.");

        }

    }

    async function handleDelete(productId) {

        if (!window.confirm("Delete this product?"))

            return;

        try {

            await productService.deleteProduct(productId);

            loadProducts();

        }

        catch (err) {

            console.error(err);

            alert("Delete failed.");

        }

    }

    const columns = [

        {
            field: "product_name",
            headerName: "Product"
        },

        {
            field: "sku",
            headerName: "SKU"
        },

        {
            field: "category_id",
            headerName: "Category",

            renderCell: (row) => {

                const category = categories.find(

                    c => c.category_id === row.category_id

                );

                return category

                    ? category.category_name

                    : "-";

            }

        },

        {
            field: "brand_id",
            headerName: "Brand",

            renderCell: (row) => {

                const brand = brands.find(

                    b => b.brand_id === row.brand_id

                );

                return brand

                    ? brand.brand_name

                    : "-";

            }

        },

        {
            field: "unit_price",
            headerName: "Unit Price",
            align: "right"
        },

        {
            field: "cost_price",
            headerName: "Cost Price",
            align: "right"
        },

        {
            field: "status",
            headerName: "Status"
        },

        {

            field: "actions",

            headerName: "Actions",

            renderCell: (row) => (

                <Box
                    display="flex"
                    gap={1}
                >

                    <Button

                        size="small"

                        variant="outlined"

                        onClick={() => {

                            setEditingProduct(row);

                            setOpenDialog(true);

                        }}

                    >

                        Edit

                    </Button>

                    <Button

                        size="small"

                        color="error"

                        variant="contained"

                        onClick={() =>

                            handleDelete(

                                row.product_id

                            )

                        }

                    >

                        Delete

                    </Button>

                </Box>

            )

        }

    ];

    if (loading) {

        return (

            <Box

                display="flex"

                justifyContent="center"

                mt={10}

            >

                <CircularProgress />

            </Box>

        );

    }

    if (error) {

        return (

            <Alert severity="error">

                {error}

            </Alert>

        );

    }

    return (

        <>

            <PageHeader

                title="Products"

                subtitle="Manage products"

            />

            <Box

                display="flex"

                justifyContent="space-between"

                mb={3}

            >

                <SearchBar

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                />

                <Button

                    variant="contained"

                    startIcon={<AddRoundedIcon />}

                    onClick={() => {

                        setEditingProduct(null);

                        setOpenDialog(true);

                    }}

                >

                    Add Product

                </Button>

            </Box>

            <DataTable

                title="Products"

                columns={columns}

                rows={filteredProducts}

            />

            <ProductFormDialog

                open={openDialog}

                onClose={() => {

                    setOpenDialog(false);

                    setEditingProduct(null);

                }}

                onSubmit={handleSave}

                initialData={editingProduct}

            />

        </>

    );

}

export default Products;