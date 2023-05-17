import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/main.tsx";
import Home from './pages/home/home.tsx';
import Details from "./pages/details/details.tsx";
import NotFound from "./pages/not-found/not-found.tsx";

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
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
