import Offer from "../home/components/offers/offer.tsx";
import { InformationList, InfoWrapper, WrapperDetails } from "./styles.ts";
import { Label } from "../home/components/search-form/style.ts";

export default function Details() {
    const vacancy = {
        id: 25746005,
        profession: "Специалист по согласованиям",
        compensation: 'Оформление по контракту',
        candidat: 'Создание дизайна',
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
        <WrapperDetails>
            <Offer />
            <InfoWrapper>
                <div>
                    <Label>Обязанности:</Label>
                    <ul>
                        <InformationList>{vacancy.work}</InformationList>
                        <InformationList>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.</InformationList>
                        <InformationList>Создание дизайна логотипов и брендбуков</InformationList>
                        <InformationList>Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка</InformationList>
                    </ul>
                </div>
                <div>
                    <Label>Требования:</Label>
                    <ul>
                        <InformationList>{vacancy.candidat}</InformationList>
                        <InformationList>Рассматриваются кандидаты только с опытом работы</InformationList>
                        <InformationList> Обязательно - наличие портфолио</InformationList>
                        <InformationList>Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в режиме многозадачности и переключаться с одного задания к другому и планировать свой день. Соблюдать сроки.</InformationList>
                        <InformationList>Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления</InformationList>
                    </ul>
                </div>
                <div>
                    <Label>Условия:</Label>
                    {}
                    <ul>
                        <InformationList>{vacancy.compensation}</InformationList>
                        <InformationList>Полный социальный пакет</InformationList>
                        <InformationList>Премирование по результатам работы</InformationList>
                    </ul>
                </div>
            </InfoWrapper>
        </WrapperDetails>
    );
}
