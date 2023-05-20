import { VacanciesPage } from "../../services/vacancies-service.ts";
import { List, PageWrapper } from "./style.ts";
import Vacancy from "./components/vacancy/vacancy.tsx";

type Props = {
    page: VacanciesPage | null,
    onPageNumberChanged: (pageNumber: number) => unknown;
};

export default function VacanciesList({ page, onPageNumberChanged } : Props) {
    // due to the api limitations, should be limited to 125
    const totalPages = page === null ? 0 : Math.min(page.totalPages, 125);

    return (
        <>
            <List>
                {page?.objects.map(vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} />)}
            </List>
            {page && page.objects.length > 0 && (
                <PageWrapper previousLabel='<'
                             nextLabel='>'
                             pageCount={totalPages}
                             onPageChange={event => onPageNumberChanged(event.selected)}/>
            )}
        </>
    );
}
