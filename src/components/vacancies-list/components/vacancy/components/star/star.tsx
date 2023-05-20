import LogoStar from '../../../../../../assets/icons/star.svg';
import { StarButton } from "./style.ts";

type Props = {
    id: string
    isFavorite: boolean
};

export default function Star({ id, isFavorite } : Props) {
    const handleChange = () => {
        return;
    };

    return (
        <StarButton
            data-elem={`vacancy-${id}-shortlist-button`}
            onClick={handleChange}
            isFavorite={isFavorite}>
            <LogoStar />
        </StarButton>
    );
}
