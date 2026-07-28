import api from "./api";

const aiService = {

    async askAI(question) {

        const response = await api.post("/ai/ask", {
            question
        });

        return response.data;

    },

    async generateSQL(question) {

        const response = await api.post("/ai/query", {
            question
        });

        return response.data;

    }

};

export default aiService;