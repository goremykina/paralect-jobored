import { MainContent } from "./style.ts";

type Props = {
    children: JSX.Element
}

export default function Main({ children } : Props) {
    return (
        <MainContent>
            {children}
        </MainContent>
    );
}
