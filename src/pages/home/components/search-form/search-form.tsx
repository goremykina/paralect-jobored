import { components, InputProps } from 'react-select';
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
import { FormEvent, useState } from "react";

type OptionType = {
    value: string;
    label: string;
}

 export type Filter = {
    catalogueId : string | null;
    salaryFrom: string | null;
    salaryTo: string | null;
}

type Prop = {
    onFilterChange: (filter : Filter | null) => unknown;
}

const SelectInput = (props: InputProps) => {
    return (
        <components.Input data-elem="industry-select" {...props} />
    );
};

export default function SearchForm({ onFilterChange } : Prop) {
    const [catalogueOption, setCatalogueOption] = useState<OptionType | null>(null);
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
        setCatalogueOption(null);
        setSalaryFrom('');
        setSalaryTo('');
    };

    const handleSubmit = (event : FormEvent) => {
        event.preventDefault();
        const filter : Filter = {
            catalogueId: catalogueOption?.value || null,
            salaryFrom,
            salaryTo
        };
        onFilterChange(filter);
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
            <FormContent onSubmit={handleSubmit}>
                <Label>Отрасль</Label>
                <Select
                    loadOptions={getOptions}
                    placeholder="Выберете отрасль"
                    classNamePrefix="react-select"
                    defaultOptions
                    value={catalogueOption}
                    onChange={(option: unknown) => setCatalogueOption(option as OptionType)}
                    components={{ Input: SelectInput }}
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
