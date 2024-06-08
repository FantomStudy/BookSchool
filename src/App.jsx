import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/registration" element={<RegistrationPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
