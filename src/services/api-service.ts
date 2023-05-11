import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.superjob.ru/2.0'
});

export default api;
