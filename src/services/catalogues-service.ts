interface Catalogue {
    title_rus: string;
    key: string;
}

export const list = async () : Promise<Catalogue[]> => {
    const response = await fetch('https://api.superjob.ru/2.0/catalogues/');
    return await response.json();
};
