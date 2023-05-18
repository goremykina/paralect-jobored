import SearchForm from "./components/search-form/search-form.tsx";
import { HomeContent, Wrapper } from "./style.ts";
import JobSearch from "./components/job-search/job-search.tsx";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { getVacanciesPage, VacanciesPage } from "../../services/vacancies-service.ts";

export default function Home()  {
    const [vacanciesPage, setVacanciesPage] = useState<VacanciesPage | null>(null);

    useEffect(() => {
        const getPage = async () => {
            const page = await getVacanciesPage(5, 4);
            setVacanciesPage(page);
        };
        getPage();
    }, []);

    return (
        <HomeContent>
            <SearchForm />
            <Wrapper>
                <JobSearch />
                <VacanciesList page={vacanciesPage} />
            </Wrapper>
        </HomeContent>
    );
}
