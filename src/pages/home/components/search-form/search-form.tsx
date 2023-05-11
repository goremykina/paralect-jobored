import { Filters, FormContent, TopPart, Input, Label, LabelUp, TopButton, Select, ButtonWrapper } from "./style.ts";
import {  list } from "../../../../services/catalogues-service.ts";
import Button from "../../../../components/button/button.tsx";

type OptionType = {
    value: string;
    label: string;
}

export default function SearchForm() {

    // const [list, setList] = useState([]);
    // function getList () {
    //     return fetch('https://api.superjob.ru/2.0/catalogues/')
    //         .then(res => res.json());
    // }

    // useEffect(()=> {
    //     getList()
    //         .then(item => setList(item));
    //
    // });

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
                <TopButton>Сбросить все</TopButton>
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
