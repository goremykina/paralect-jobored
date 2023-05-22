import ErrorIcon from '../../assets/icons/error.svg';
import { ErrorMessage, NotFoundWrapper, VacancyLink } from "./style.ts";

type Props = {
    showSearchButton: boolean
};

export default function NotFound({ showSearchButton } : Props) {
    return(
        <NotFoundWrapper>
            <ErrorIcon />
            <ErrorMessage>Упс, здесь еще ничего нет</ErrorMessage>
            {showSearchButton && <VacancyLink to="/">Поиск вакансий</VacancyLink>}
        </NotFoundWrapper>
    );
}
