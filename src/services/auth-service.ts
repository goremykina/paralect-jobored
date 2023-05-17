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
    reg_user_resumes_count: number;
};

const api = axios.create(config);
const authorizeQueryParams = {
    login: 'sergei.stralenia@gmail.com',
    password: 'paralect123',
    client_id: '2356',
    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    hr: '0'
};
const cookies = new Cookies();

export const getAccessToken = async () => {
    const accessTokenCookie = cookies.get('accessToken');

    if (accessTokenCookie) {
        return accessTokenCookie;
    }

    const { data } = await api.get<AuthorizationResponse>('/oauth2/password', { params: authorizeQueryParams });
    const accessToken = `${data.token_type} ${data.access_token}`;

    cookies.set('accessToken', accessToken, {
        path: '/',
        expires: fromUnixTimestamp(data.ttl)
    });

    return accessToken;
};
