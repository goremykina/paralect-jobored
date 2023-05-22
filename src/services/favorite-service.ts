import { Vacancy } from "./vacancies-service.ts";

const key = 'favorites';

export const addFavorite = (vacancy : Vacancy) => {
    const favoriteVacancies = getFavorites();

    vacancy.favorite = true;
    favoriteVacancies.push(vacancy);

    localStorage.setItem(key, JSON.stringify(favoriteVacancies));
};

export const removeFavorite = (id: string) => {
    const favoriteVacancies = getFavorites();
    const index = favoriteVacancies.findIndex(vacancy => vacancy.id === id);

    if (index < 0) {
        return;
    }

    favoriteVacancies.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(favoriteVacancies));
};

export const getFavorites = () : Vacancy[] => {
    const favoriteVacancies = localStorage.getItem(key);
    if (!favoriteVacancies) {
        return [];
    }

    return JSON.parse(favoriteVacancies);
};
