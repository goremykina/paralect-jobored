import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoWrapper, WrapperDetails } from "./styles.ts";
import { getVacancy, Vacancy as VacancyType } from "../../services/vacancies-service.ts";
import Vacancy from "../../components/vacancies-list/components/vacancy/vacancy.tsx";

export default function Details() {
    const { id } = useParams();
    const [vacancy, setVacancy] = useState<VacancyType | null>(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchVacancy = async () => {
          const response = await getVacancy(id);
            setVacancy(response);
        };

        fetchVacancy();
    }, [id]);

    if (!vacancy) {
        return <div>Loading...</div>;
    }

    return (
        <WrapperDetails>
            <Vacancy vacancy={vacancy} />
            <InfoWrapper dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
        </WrapperDetails>
    );
}
