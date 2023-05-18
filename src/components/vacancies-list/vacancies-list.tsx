import { VacanciesPage } from "../../services/vacancies-service.ts";
import { List } from "./style.ts";
import Vacancy from "./components/vacancy/vacancy.tsx";

type Props = {
    page: VacanciesPage | null
};

export default function VacanciesList({ page } : Props) {
    return (
        <List>
            {page?.objects.map(vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} />)}
        </List>
    );
}
