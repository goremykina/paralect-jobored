import Header from "./components/header/header.tsx";
import Main from "./components/main/main.tsx";
import Home from './pages/home/home.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/details/details.tsx";
import NotFound from "./pages/not-found/not-found.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vacancies/:id",
        element: <Details />,
    },
    {
        path: "/error",
        element: <NotFound />
    }
]);

function App() {
    return (
        <>
            <Header />
            <Main>
                <RouterProvider router={router} />
            </Main>
        </>
  );
}

export default App;
