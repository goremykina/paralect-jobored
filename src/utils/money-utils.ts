import { Vacancy } from "../services/vacancies-service.ts";

export const getSalaryString = (vacancy: Vacancy) : string => {
    const { payment_from, payment_to, currency } = vacancy;
    if (!payment_from && !payment_to) {
        return '';
    }

    let resultSalary = '';
    if (payment_to === payment_from) {
        resultSalary += payment_to;
    }
    else {
        if (payment_from) {
            resultSalary += ` от ${payment_from}`;
        }
        if (payment_to) {
            resultSalary += ` до ${payment_to}`;
        }
    }

    return `з/п${resultSalary} ${currency}`;
}
