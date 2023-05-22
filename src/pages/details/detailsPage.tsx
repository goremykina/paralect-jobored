import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoWrapper, WrapperDetails } from "./styles.ts";
import { getVacancy, Vacancy as VacancyType } from "../../services/vacancies-service.ts";
import Vacancy from "../../components/vacancies-list/components/vacancy/vacancy.tsx";
import Spinner from "../../components/spinner/spinner.tsx";
import NotFound from "../../components/not-found/not-found.tsx";

export default function DetailsPage() {
    const { id } = useParams();
    const [vacancy, setVacancy] = useState<VacancyType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchVacancy = async () => {
            setIsLoading(true);
            const response = await getVacancy(id);

            setVacancy(response);
            setIsLoading(false);
        };

        fetchVacancy();
    }, [id]);

    return (
        <WrapperDetails>
            {isLoading && <Spinner />}
            {!isLoading && !vacancy && <NotFound showSearchButton={true} />}
            {!isLoading && vacancy && (
                <>
                    <Vacancy vacancy={vacancy} isListItem={false} />
                    <InfoWrapper dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
                </>
            )}
        </WrapperDetails>
    );
}
