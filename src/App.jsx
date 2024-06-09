import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import RegistrationPage from "./Pages/Registration/RegistrationPage.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/registration" element={<RegistrationPage />}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
