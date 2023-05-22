import axios from "axios";
import { config } from "./axios-settings.ts";
import { Cookies } from "react-cookie";
import { fromUnixTimestamp } from "../utils/date-time-utils.ts";

type AuthorizationResponse = {
    access_token: string;
    refresh_token: string;
    ttl: number;
    expires_in: number;
    token_type: string;
};

const api = axios.create(config);
const baseQueryParams = {
    client_id: '2356',
    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
};
const authorizeQueryParams = {
    ...baseQueryParams,
    login: 'sergei.stralenia@gmail.com',
    password: 'paralect123',
    hr: '0'
};
const cookies = new Cookies();

export const getAccessToken = async () => {
    const accessTokenCookie = cookies.get('accessToken');
    if (accessTokenCookie) {
        return accessTokenCookie;
    }

    const refreshTokenCookie = cookies.get('refreshToken');
    const { data } = refreshTokenCookie
        ? await api.get<AuthorizationResponse>('/oauth2/refresh_token', { params: { ...baseQueryParams, refresh_token: refreshTokenCookie } })
        : await api.get<AuthorizationResponse>('/oauth2/password', { params: authorizeQueryParams });
    const accessToken = `${data.token_type} ${data.access_token}`;

    cookies.set('accessToken', accessToken, {
        path: '/',
        expires: fromUnixTimestamp(data.ttl)
    });

    cookies.set('refreshToken', data.refresh_token, {
        path: '/'
    });

    return accessToken;
};
