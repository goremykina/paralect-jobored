import SearchForm from "./components/search-form/search-form.tsx";
import { HomeContent, Wrapper } from "./style.ts";
import JobSearch from "./components/job-search/job-search.tsx";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { getVacanciesPage, VacanciesPage } from "../../services/vacancies-service.ts";

export default function Home()  {
    const [vacanciesPage, setVacanciesPage] = useState<VacanciesPage | null>(null);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const getPage = async () => {
            const page = await getVacanciesPage(0, 4, keyword);
            setVacanciesPage(page);
        };
        getPage();
    }, [keyword]);

    const handleKeywordChanged = (newKeyword: string) => {
        setKeyword(newKeyword);
    };

    return (
        <HomeContent>
            <SearchForm />
            <Wrapper>
                <JobSearch onKeywordChanged={handleKeywordChanged} />
                <VacanciesList page={vacanciesPage} />
            </Wrapper>
        </HomeContent>
    );
}
