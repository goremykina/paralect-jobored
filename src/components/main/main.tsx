import { MainContent } from "./style.ts";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header.tsx";

export default function Main() {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    );
}
