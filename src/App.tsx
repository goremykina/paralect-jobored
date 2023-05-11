import Header from "./components/header/header.tsx";
import Main from "./components/main/main.tsx";
import Home from './pages/home/home.tsx';
function App() {
    return (
    <>
        <Header />
        <Main>
            <Home />
        </Main>
    </>
  );
}

export default App;
