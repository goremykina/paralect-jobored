import LogoStar from '../../../../../../assets/icons/star.svg';
import { StarButton } from "./style.ts";

type Props = {
    isFavorite: boolean
};

export default function Star({ isFavorite } : Props) {
    const handleChange = () => {
        return;
    };

    return (
        <StarButton onClick={handleChange} isFavorite={isFavorite}>
            <LogoStar />
        </StarButton>
    );
}
