import axios, { InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "./auth-service.ts";
import { config } from "./axios-settings.ts";

const api = axios.create(config);

api.interceptors.request.use(async (config) : Promise<InternalAxiosRequestConfig> => {
    const accessToken = await getAccessToken();
    config.headers.Authorization = accessToken;

    return config;
});

export default api;
