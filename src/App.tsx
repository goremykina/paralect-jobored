import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/main.tsx";
import Home from './pages/home/home.tsx';
import Details from "./pages/details/details.tsx";
import NotFound from "./pages/not-found/not-found.tsx";
import Favorites from "./pages/favorites/favorites.tsx";

const router = createBrowserRouter([
    {
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/vacancies/:id",
                element: <Details />,
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
], { basename: import.meta.env.DEV ? '/' : '/paralect-jobored/' });

function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
