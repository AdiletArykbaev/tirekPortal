import axios from "axios";

export const API_URL = "https://tirek-backend.herokuapp.com";

const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem("token")}`;
    return config;
});

export default api