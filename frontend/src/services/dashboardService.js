import api from "./api";

const dashboardService = {
    async getDashboard() {
        const response = await api.get("/dashboard/");
        return response.data;
    },

    async getSummary() {
        const response = await api.get("/dashboard/summary");
        return response.data;
    },

    async getLowStock() {
        const response = await api.get("/dashboard/low-stock");
        return response.data;
    },

    async getInventoryValue() {
        const response = await api.get("/dashboard/inventory-value");
        return response.data;
    },

    async getCategorySummary() {
        const response = await api.get("/dashboard/category-summary");
        return response.data;
    },

    async getSupplierPerformance() {
        const response = await api.get("/dashboard/supplier-performance");
        return response.data;
    },
};

export default dashboardService;