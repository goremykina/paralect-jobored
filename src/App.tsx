import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/main.tsx";
import HomePage from './pages/home/homePage.tsx';
import DetailsPage from "./pages/details/detailsPage.tsx";
import NotFoundPage from "./pages/not-found/not-found-page.tsx";
import FavoritesPage from "./pages/favorites/favoritesPage.tsx";

const router = createBrowserRouter([
    {
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/vacancies/:id",
                element: <DetailsPage />,
            },
            {
                path: "/favorites",
                element: <FavoritesPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
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
