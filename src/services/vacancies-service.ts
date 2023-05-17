import api from "./api-service.ts";

type Vacancy = {
    id: string;
}

type VacanciesPage = {
    objects: Vacancy[];
    total: number;
}

export const getVacancy = async (id: string) => {
    const response = await api.get<Vacancy>(`/vacancies/${id}`);
    return response.data;
};

export const getVacanciesPage = async (pageNumber: number, pageSize: number) => {
    const queryParameters = {
      page: pageNumber,
      count: pageSize
    };
    const response = await api.get<VacanciesPage>('/vacancies', { params: queryParameters });

    return response.data;
};
