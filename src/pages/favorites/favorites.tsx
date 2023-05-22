import { WrapperFavorites } from "./style.ts";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { VacanciesPage, Vacancy } from "../../services/vacancies-service.ts";
import { getFavorites } from "../../services/favorite-service.ts";


export default function Favorites() {
    const [favoriteVacancies, setFavoriteVacancies] = useState<Vacancy[]>([]);

    useEffect(() => {
        const vacancies = getFavorites();
        setFavoriteVacancies(vacancies);
    }, []);

    const page : VacanciesPage = {
        totalPages: 1,
        number: 0,
        total: favoriteVacancies.length,
        objects: favoriteVacancies
    };

    return (
        <WrapperFavorites>
            <VacanciesList page={page} />
        </WrapperFavorites>
    );
}
