import api from "./api-service.ts";

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
}

export type VacanciesPage = {
    objects: Vacancy[];
    total: number;
}

export const getVacancy = async (id: string) => {
    const response = await api.get<Vacancy>(`/vacancies/${id}`);
    return response.data;
};

export const getVacanciesPage = async (pageNumber: number, pageSize: number, keyword = '') => {
    const queryParameters = {
      page: pageNumber,
      count: pageSize,
      keyword
    };
    const response = await api.get<VacanciesPage>('/vacancies', { params: queryParameters });

    return response.data;
};
