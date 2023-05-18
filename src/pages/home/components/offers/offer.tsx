import {
    OfferDiv,
    OfferName,
    JobVacancy,
    BriefInfo,
    Salary,
    Information,
    LocationWrapper,
} from "./style.ts";
import Location from '../../../../assets/icons/location.svg';
import Star from "./components/star/star.tsx";

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
        },
        favorite: true,
        payment : 'з/п от 70000 rub'
    };
    return (
        <OfferDiv>
            <OfferName>
                <JobVacancy>{vacancy.profession}</JobVacancy>
                <Star isFavorite={vacancy.favorite} />
            </OfferName>
            <BriefInfo>
                <Salary>{vacancy.payment}</Salary>
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
