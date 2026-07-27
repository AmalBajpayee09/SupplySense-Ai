import api from "./api";

const productService = {

    async getProducts() {

        const response = await api.get("/products/");

        return response.data;

    },

    async getProduct(id) {

        const response = await api.get(`/products/${id}`);

        return response.data;

    },

    async createProduct(product) {

        const response = await api.post(

            "/products/",

            product

        );

        return response.data;

    },

    async updateProduct(id, product) {

        const response = await api.put(

            `/products/${id}`,

            product

        );

        return response.data;

    },

    async deleteProduct(id) {

        const response = await api.delete(

            `/products/${id}`

        );

        return response.data;

    }

};

export default productService;