import Header from "./components/header/header.tsx";
import Main from "./components/main/main.tsx";
import Home from './pages/home/home.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/details/details.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/asd",
        element: <Details />,
    },
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
