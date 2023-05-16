import SearchForm from "./components/search-form/search-form.tsx";
import Offer from "./components/offers/offer.tsx";
import { HomeContent, Wrapper } from "./style.ts";
import JobSearch from "./components/job-search/job-search.tsx";

export default function Home()  {
    return (
        <HomeContent>
            <SearchForm />
            <Wrapper>
                <JobSearch />
                <Offer />
            </Wrapper>
        </HomeContent>
    );
}
