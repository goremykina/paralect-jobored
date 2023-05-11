import { SearchButtonWrapper, SearchIconWrapper, SearchJobDiv, SearchJobInput } from "./style.ts";
import SearchIcon from '../../../../assets/icons/search.svg';
import Button from "../../../../components/button/button.tsx";

export default function JobSearch () {
    return (
        <SearchJobDiv>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <SearchJobInput placeholder='Введите название вакансии' />
            <SearchButtonWrapper>
                <Button size="small">Поиск</Button>
            </SearchButtonWrapper>
        </SearchJobDiv>
    );
}
