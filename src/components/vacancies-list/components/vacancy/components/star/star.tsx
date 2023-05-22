import LogoStar from '../../../../../../assets/icons/star.svg';
import { StarButton } from "./style.ts";

type Props = {
    id: string
    isFavorite: boolean
    toggleRequested: () => unknown
};

export default function Star({ id, isFavorite, toggleRequested } : Props) {
    return (
        <StarButton
            data-elem={`vacancy-${id}-shortlist-button`}
            onClick={() => toggleRequested()}
            isFavorite={isFavorite}>
            <LogoStar />
        </StarButton>
    );
}
