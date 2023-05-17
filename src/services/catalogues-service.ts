import api from "./api-service.ts";

type Catalogue = {
    title_rus: string;
    key: string;
}

export const list = async () : Promise<Catalogue[]> => {
    const response = await api.get<Catalogue[]>('/catalogues');
    return response.data;
};
