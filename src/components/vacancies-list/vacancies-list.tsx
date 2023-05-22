import { VacanciesPage } from "../../services/vacancies-service.ts";
import { List, MainContainer, Paginate } from "./style.ts";
import Vacancy from "./components/vacancy/vacancy.tsx";
import Spinner from "../spinner/spinner.tsx";
import NotFound from "../not-found/not-found.tsx";

type Props = {
    page: VacanciesPage | null,
    isLoading?: boolean,
    onPageNumberChanged?: (pageNumber: number) => unknown;
};

export default function VacanciesList({ page, isLoading, onPageNumberChanged } : Props) {
    // due to the api limitations, should be limited to 125
    const totalPages = page === null ? 0 : Math.min(page.totalPages, 125);

    return (
        <>
            <MainContainer>
                {isLoading && <Spinner />}
                {!isLoading && !page?.total && <NotFound showSearchButton={false}/>}
                {!isLoading && !!page?.objects.length && (
                    <List>
                        {page?.objects.map(vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} isListItem={true} />)}
                    </List>
                )}
            </MainContainer>
            {page && page.objects.length > 0 && (
                <Paginate previousLabel='<'
                          nextLabel='>'
                          forcePage={page.number}
                          pageCount={totalPages}
                          onPageChange={event => onPageNumberChanged && onPageNumberChanged(event.selected)}/>
            )}
        </>
    );
}
