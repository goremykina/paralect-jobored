import ErrorIcon from '../../assets/icons/error.svg';
import { ErrorMessage, NotFoundWrapper, VacancyLink } from "./style.ts";

export default function NotFound() {
    return(
        <NotFoundWrapper>
            <ErrorIcon />
            <ErrorMessage>Упс, здесь еще ничего нет</ErrorMessage>
            <VacancyLink to="/">Поиск вакансий</VacancyLink>
        </NotFoundWrapper>
    );
}
