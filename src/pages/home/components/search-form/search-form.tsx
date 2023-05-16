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

type OptionType = {
    value: string;
    label: string;
}

export default function SearchForm() {

    const getOptions = async () : Promise<OptionType[]> => {
        const catalogues = await list();
        return catalogues.map((catalogue) : OptionType => ({
            label: catalogue.title_rus,
            value: catalogue.key
        }));
    };

    return (
        <Filters>
            <TopPart>
                <LabelUp>Фильтры</LabelUp>
                <WrapperReset>
                    <TopButton>Сбросить все</TopButton>
                    <Cross />
                </WrapperReset>
            </TopPart>
            <FormContent>
                <Label>Отрасль</Label>
                <Select
                    loadOptions={getOptions}
                    placeholder="Выберете отрасль"
                    classNamePrefix="react-select"
                    defaultOptions
                />
                <Label>Оклад</Label>
                <Input type='number' placeholder='От'></Input>
                <Input type='number' placeholder='До'></Input>
                <ButtonWrapper>
                    <Button>Применить</Button>
                </ButtonWrapper>
            </FormContent>
        </Filters>

    );
}
