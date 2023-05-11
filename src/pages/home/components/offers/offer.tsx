import { OfferDiv, OfferName, JobVacancy,  BriefInfo, SalarySpan, InformationSpan, LocationDiv } from "./style.ts";
import Star from '../../../../assets/icons/star.svg';
import Location from '../../../../assets/icons/location.svg';

export default function Offer () {
    return (
        <OfferDiv>
            <OfferName>
                <JobVacancy>Менеджер-дизайнер</JobVacancy>
                <Star />
            </OfferName>
            <BriefInfo>
                <SalarySpan>зп от 30000</SalarySpan>
                <span>・</span>
                <InformationSpan>Полный рабочий день</InformationSpan>
            </BriefInfo>
            <LocationDiv>
                <Location />
                <InformationSpan>Саратов</InformationSpan>
            </LocationDiv>
        </OfferDiv>
    );
}
