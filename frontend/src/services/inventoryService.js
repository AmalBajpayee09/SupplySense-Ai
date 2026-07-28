import api from "./api";

const inventoryService = {

    async getInventory() {

        const response = await api.get("/inventory/");

        return response.data;

    },

    async getInventoryById(id) {

        const response = await api.get(`/inventory/${id}`);

        return response.data;

    },

    async createInventory(data) {

        const response = await api.post(

            "/inventory/",

            data

        );

        return response.data;

    },

    async updateInventory(id, data) {

        const response = await api.put(

            `/inventory/${id}`,

            data

        );

        return response.data;

    },

    async deleteInventory(id) {

        const response = await api.delete(

            `/inventory/${id}`

        );

        return response.data;

    }

};

export default inventoryService;