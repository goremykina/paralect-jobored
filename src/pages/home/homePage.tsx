import SearchForm, { Filter } from "./components/search-form/search-form.tsx";
import { HomeContent, Wrapper } from "./style.ts";
import JobSearch from "./components/job-search/job-search.tsx";
import VacanciesList from "../../components/vacancies-list/vacancies-list.tsx";
import { useEffect, useState } from "react";
import { getVacanciesPage, VacanciesPage } from "../../services/vacancies-service.ts";

export default function HomePage()  {
    const [vacanciesPage, setVacanciesPage] = useState<VacanciesPage | null>(null);
    const [keyword, setKeyword] = useState('');
    const [filter, setFilter] = useState<Filter | null>(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPage = async () => {
            setIsLoading(true);

            const page = await getVacanciesPage(pageNumber, 4, keyword, filter?.salaryFrom, filter?.salaryTo, filter?.catalogueId);
            setVacanciesPage(page);

            setIsLoading(false);
        };
        getPage();
    }, [keyword, filter, pageNumber]);

    const handleKeywordChanged = (newKeyword: string) => {
        setPageNumber(0);
        setKeyword(newKeyword);
    };

    const handleFilterChanged = (newFilter : Filter | null) => {
        setPageNumber(0);
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
                <VacanciesList page={vacanciesPage}
                               isLoading={isLoading}
                               onPageNumberChanged={handlePageNumberChanged} />
            </Wrapper>
        </HomeContent>
    );
}
