import SearchForm, { Filter } from "./components/search-form/search-form.tsx";
import { HomeContent, Wrapper } from "./style.ts";
import JobSearch from "./components/job-search/job-search.tsx";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { getVacanciesPage, VacanciesPage } from "../../services/vacancies-service.ts";

export default function Home()  {
    const [vacanciesPage, setVacanciesPage] = useState<VacanciesPage | null>(null);
    const [keyword, setKeyword] = useState('');
    const [filter, setFilter] = useState<Filter | null>(null);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const getPage = async () => {
            const page = await getVacanciesPage(pageNumber, 4, keyword, filter?.salaryFrom, filter?.salaryTo, filter?.catalogueId);
            setVacanciesPage(page);
        };
        getPage();
    }, [keyword, filter, pageNumber]);

    const handleKeywordChanged = (newKeyword: string) => {
        setKeyword(newKeyword);
    };

    const handleFilterChanged = (newFilter : Filter | null) => {
        setFilter(newFilter);
    };

    const handlePageNumberChanged = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    };

    return (
        <HomeContent>
            <SearchForm onFilterChange={handleFilterChanged} />
            <Wrapper>
                <JobSearch onKeywordChanged={handleKeywordChanged} />
                <VacanciesList page={vacanciesPage} onPageNumberChanged={handlePageNumberChanged} />
            </Wrapper>
        </HomeContent>
    );
}
