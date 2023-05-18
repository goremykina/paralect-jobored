import {
    Filters,
    FormContent,
    TopPart,
    Input,
    Label,
    LabelUp,
    TopButton,
    Select,
    ButtonWrapper,
    WrapperReset
} from "./style.ts";
import {  list } from "../../../../services/catalogues-service.ts";
import Button from "../../../../components/button/button.tsx";
import Cross from '../../../../assets/icons/cross.svg';
import { useState } from "react";

type OptionType = {
    value: string;
    label: string;
}

export default function SearchForm() {
    const [industryOption, setIndustryOption] = useState<OptionType | null>(null);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');

    const getOptions = async () : Promise<OptionType[]> => {
        const catalogues = await list();
        return catalogues.map((catalogue) : OptionType => ({
            label: catalogue.title_rus,
            value: catalogue.key
        }));
    };

    const  resetAll = () =>  {
        setIndustryOption(null);
        setSalaryFrom('');
        setSalaryTo('');
    };

    return (
        <Filters>
            <TopPart>
                <LabelUp>Фильтры</LabelUp>
                <WrapperReset>
                    <TopButton onClick={()=> resetAll()}>Сбросить все</TopButton>
                    <Cross />
                </WrapperReset>
            </TopPart>
            <FormContent>
                <Label>Отрасль</Label>
                <Select
                    data-elem='industry-select'
                    loadOptions={getOptions}
                    placeholder="Выберете отрасль"
                    classNamePrefix="react-select"
                    defaultOptions
                    value={industryOption}
                    onChange={(option: unknown) => setIndustryOption(option as OptionType)}
                />
                <Label>Оклад</Label>
                <Input type='number'
                       placeholder='От'
                       min='0'
                       value={salaryFrom}
                       onChange={(event) => setSalaryFrom(event.target.value)}
                       data-elem='salary-from-input' />
                <Input type='number'
                       placeholder='До'
                       min='0'
                       value={salaryTo}
                       onChange={(event) => setSalaryTo(event.target.value)}
                       data-elem='salary-to-input' />
                <ButtonWrapper>
                    <Button data-elem='search-button'>Применить</Button>
                </ButtonWrapper>
            </FormContent>
        </Filters>

    );
}
