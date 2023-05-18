import {
    OfferDiv,
    OfferName,
    JobTitleLink,
    BriefInfo,
    Salary,
    Information,
    LocationWrapper,
} from "./style.ts";
import Location from '../../../../assets/icons/location.svg';
import Star from "./components/star/star.tsx";
import { Vacancy } from "../../../../services/vacancies-service.ts";
import { getSalaryString } from "../../../../utils/money-utils.ts";

type Props = {
    vacancy: Vacancy
};

export default function Vacancy({ vacancy } : Props) {
    const salary = getSalaryString(vacancy);

    return (
        <OfferDiv>
            <OfferName>
                <JobTitleLink to={`/vacancies/${vacancy.id}`}>
                    {vacancy.profession}
                </JobTitleLink>
                <Star isFavorite={vacancy.favorite} />
            </OfferName>
            <BriefInfo>
                {salary ? (
                    <>
                        <Salary>{salary}</Salary>
                        <span>・</span>
                    </>) : null}

                <Information>{vacancy.type_of_work.title}</Information>
            </BriefInfo>
            <LocationWrapper>
                <Location />
                <Information>{vacancy.town.title}</Information>
            </LocationWrapper>
        </OfferDiv>
    );
}
