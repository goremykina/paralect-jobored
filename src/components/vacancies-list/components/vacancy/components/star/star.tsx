import LogoStar from '../../../../../../assets/icons/star.svg';
import { StarButton } from "./style.ts";
import { Vacancy } from "../../../../../../services/vacancies-service.ts";
import { addFavorite, removeFavorite } from "../../../../../../services/favorite-service.ts";
import { useState } from "react";

type Props = {
    vacancy: Vacancy
};

export default function Star({ vacancy } : Props) {
    const [isFavorite, setIsFavorite] = useState(vacancy.favorite);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 250);

        if (isFavorite) {
            removeFavorite(vacancy);
        } else {
            addFavorite(vacancy);
        }

        setIsFavorite(vacancy.favorite);
    };

    return (
        <StarButton
            data-elem={`vacancy-${vacancy.id}-shortlist-button`}
            onClick={() => handleClick()}
            isFavorite={isFavorite}
            isClicked={isClicked}>
            <LogoStar />
        </StarButton>
    );
}
