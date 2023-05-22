import {
    MainContainer,
    VacancyName,
    JobTitleLink,
    BriefInfo,
    Salary,
    LocationWrapper, JobTitle, Employment, Town,
} from "./style.ts";
import Location from '../../../../assets/icons/location.svg';
import Star from "./components/star/star.tsx";
import { Vacancy } from "../../../../services/vacancies-service.ts";
import { getSalaryString } from "../../../../utils/money-utils.ts";
import { addFavorite, removeFavorite } from "../../../../services/favorite-service.ts";

type Props = {
    vacancy: Vacancy,
    isListItem: boolean
};

export default function Vacancy({ vacancy, isListItem } : Props) {
    const salary = getSalaryString(vacancy);

    const handleToggleRequested = () => {
        if (vacancy.favorite) {
            removeFavorite(vacancy.id);
        } else {
            addFavorite(vacancy);
        }
    };

    return (
        <MainContainer data-elem={`vacancy-${vacancy.id}`}>
            <VacancyName>
                {isListItem
                    ?
                    (<JobTitleLink to={`/vacancies/${vacancy.id}`}>
                        {vacancy.profession}
                    </JobTitleLink>)
                    :
                    (<JobTitle>
                        {vacancy.profession}
                    </JobTitle>)}
                <Star id={vacancy.id}
                      isFavorite={vacancy.favorite}
                      toggleRequested={handleToggleRequested}/>
            </VacancyName>
            <BriefInfo>
                {salary ? (
                    <>
                        <Salary isEnlarged={!isListItem}>{salary}</Salary>
                        <span>・</span>
                    </>) : null}

                <Employment isEnlarged={!isListItem}>{vacancy.type_of_work.title}</Employment>
            </BriefInfo>
            <LocationWrapper>
                <Location />
                <Town>{vacancy.town.title}</Town>
            </LocationWrapper>
        </MainContainer>
    );
}
