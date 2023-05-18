import { SearchButtonWrapper, SearchIconWrapper, SearchJobForm, SearchJobInput } from "./style.ts";
import SearchIcon from '../../../../assets/icons/search.svg';
import Button from "../../../../components/button/button.tsx";
import { FormEvent, useState } from "react";

type Props = {
    onKeywordChanged: (keyword: string) => unknown;
};

export default function JobSearch ({ onKeywordChanged } : Props) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event : FormEvent) => {
        event.preventDefault();
        onKeywordChanged(keyword);
    };

    return (
        <SearchJobForm onSubmit={handleSubmit}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <SearchJobInput placeholder="Введите название вакансии"
                            data-elem="search-input"
                            onChange={event => setKeyword(event.target.value)} />
            <SearchButtonWrapper>
                <Button size="small" data-elem="search-button">Поиск</Button>
            </SearchButtonWrapper>
        </SearchJobForm>
    );
}
