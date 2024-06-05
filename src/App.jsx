import "./App.css";
import Header from "./Components/Header/Header";
import IntroSection from "./Components/IntroSection/IntroSection";
import PackagesSection from "./Components/PackagesSection/PackagesSection";
import ReviewSection from "./Components/ReviewSection/ReviewSection";
import Footer from "./Components/Footer/Footer";
import EmailSection from "../src/Components/EmailSection/EmailSection"

function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <PackagesSection />
      <ReviewSection />
      <EmailSection />
      <Footer />
    </>
  );
}

export default App;
