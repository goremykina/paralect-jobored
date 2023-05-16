import {
    OfferDiv,
    OfferName,
    JobVacancy,
    BriefInfo,
    Salary,
    Information,
    LocationWrapper,
} from "./style.ts";
import Star from '../../../../assets/icons/star.svg';
import Location from '../../../../assets/icons/location.svg';

export default function Offer() {

    const vacancy = {
        id: 25746005,
        profession: "Специалист по согласованиям",
        work: "1. Подготовка, согласование с Комитетами и службами...",
        type_of_work: {
            id: 6,
            title: "Полный рабочий день"
        },
        town: {
            id: 14,
            title: "Санкт-Петербург"
        }
    };
    return (
        <OfferDiv>
            <OfferName>
                <JobVacancy>{vacancy.profession}</JobVacancy>
                <Star />
            </OfferName>
            <BriefInfo>
                <Salary>зп от 30000</Salary>
                <span>・</span>
                <Information>{vacancy.type_of_work.title}</Information>
            </BriefInfo>
            <LocationWrapper>
                <Location />
                <Information>{vacancy.town.title}</Information>
            </LocationWrapper>
        </OfferDiv>
    );
}
