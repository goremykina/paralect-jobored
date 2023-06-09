import api from "./api-service.ts";
import { getFavorites } from "./favorite-service.ts";

export type Town = {
    id: string;
    title: string;
};

export type TypeOfWork = {
    id: string;
    title: string;
};

export type Vacancy = {
    id: string;
    profession: string;
    favorite: boolean;
    payment_from: number;
    payment_to: number;
    town: Town;
    type_of_work: TypeOfWork;
    currency: string;
    vacancyRichText: string;
}

export type VacanciesPage = {
    objects: Vacancy[];
    total: number;
    totalPages: number;
    number: number;
}

export const getVacancy = async (id: string) : Promise<Vacancy | null> => {
    try {
        const response = await api.get<Vacancy>(`/vacancies/${id}`);
        const favorites = getFavorites();

        response.data.favorite = favorites.some(f => f.id === response.data.id);

        return response.data;
    } catch(error) {
        return null;
    }
};

export const getVacanciesPage = async (pageNumber: number, pageSize: number, keyword : string | null = '',
                                       payment_from : string | null = '', payment_to : string | null = '',
                                       catalogueId : string | null = '') => {
    const queryParameters = {
        page: pageNumber,
        count: pageSize,
        keyword,
        payment_from,
        payment_to,
        catalogues: catalogueId,
        published: 1
    };
    const { data } = await api.get<VacanciesPage>('/vacancies', { params: queryParameters });
    data.number = pageNumber;
    data.totalPages = Math.ceil(data.total / pageSize);

    const favorites = getFavorites();
    data.objects.forEach(vacancy => {
        vacancy.favorite = favorites.some(f => f.id === vacancy.id);
    });

    return data;
};
