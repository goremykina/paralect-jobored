import { WrapperFavorites } from "./style.ts";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { VacanciesPage, Vacancy } from "../../services/vacancies-service.ts";
import { getFavorites } from "../../services/favorite-service.ts";
import NotFound from "../../components/not-found/not-found.tsx";

const pageSize = 4;

export default function FavoritesPage() {
    const [favoriteVacancies, setFavoriteVacancies] = useState<Vacancy[]>([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const vacancies = getFavorites();
        setFavoriteVacancies(vacancies);
    }, []);

    const itemsToSkip = pageNumber * pageSize;
    const page : VacanciesPage = {
        totalPages:  Math.ceil(favoriteVacancies.length / pageSize),
        number: pageNumber,
        total: favoriteVacancies.length,
        objects: favoriteVacancies.slice(itemsToSkip, itemsToSkip + pageSize)
    };

    const handlePageNumberChanged = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    };

    return (
        <WrapperFavorites>
            {favoriteVacancies.length === 0
                ? (
                    <NotFound />
                )
                : (
                    <VacanciesList page={page} onPageNumberChanged={handlePageNumberChanged} />
                )
            }
        </WrapperFavorites>
    );
}
