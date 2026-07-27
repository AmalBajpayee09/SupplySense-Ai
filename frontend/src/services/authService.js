import api from "./api";

const authService = {

    async login(credentials) {

        const response = await api.post(
            "/auth/login",
            credentials
        );

        return response.data;

    },

    async register(user) {

        const response = await api.post(
            "/auth/register",
            user
        );

        return response.data;

    },

    logout() {

        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

    },

    getToken() {

        return localStorage.getItem("access_token");

    },

    isAuthenticated() {

        return !!localStorage.getItem("access_token");

    }

};

export default authService;