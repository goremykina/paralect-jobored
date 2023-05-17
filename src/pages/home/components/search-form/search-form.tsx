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
import { useEffect, useState } from "react";

type OptionType = {
    value: string;
    label: string;
}

export default function SearchForm() {
    const [industryOption, setIndustryOption] = useState<OptionType | null>(null);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');

    useEffect(() => {
        console.log(industryOption);
    }, [industryOption]);


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
                <Input type='number' placeholder='От' min='0'  value={salaryFrom} data-elem='salary-from-input'></Input>
                <Input type='number' placeholder='До' min='0' value={salaryTo} data-elem='salary-to-input'></Input>
                <ButtonWrapper>
                    <Button data-elem='search-button'>Применить</Button>
                </ButtonWrapper>
            </FormContent>
        </Filters>

    );
}
