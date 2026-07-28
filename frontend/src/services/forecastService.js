import api from "./api";

const forecastService = {
    async predict(data) {
        const response = await api.post("/forecast/predict", data);
        return response.data;
    },

    async getHistory(productId) {
        const response = await api.get(`/forecast/history/${productId}`);
        return response.data;
    },

    async getComparison(productId) {
        const response = await api.get(`/forecast/comparison/${productId}`);
        return response.data;
    }
};

export default forecastService;