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
    vacancyRichText: string;
}

export type VacanciesPage = {
    objects: Vacancy[];
    total: number;
    totalPages: number;
    number: number;
}

export const getVacancy = async (id: string) => {
    const response = await api.get<Vacancy>(`/vacancies/${id}`);
    return response.data;
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
      catalogues: catalogueId
    };
    const { data } = await api.get<VacanciesPage>('/vacancies', { params: queryParameters });
    data.number = pageNumber;
    data.totalPages = Math.ceil(data.total / pageSize);

    return data;
};
