import "./App.css";
import Hero from "./component/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./component/Services/Services";
import ContactForm from "./component/ContactForm/ContactForm";
import Footer from "./component/Footer/Footer";
import TripCalculator from "./component/TripCalculator/TripCalculator";
import ImageSlider from "./component/carousel/ImageSlider";
import HappyCustomers from "./component/HappyCustomers/HappyCustomers";
import HoneymoonDesties from "./component/HoneyMoondesties/HoneymoonDesties";
import Testimonial from "./component/testimonial/testimonial";
import TrandingSlider from "./component/TrandingSlider/TrandingSlider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services></Services>
                <ImageSlider />
                {/* <TripCalculator />  */}
                <HappyCustomers />
                <Testimonial />
                <ContactForm />
                <HoneymoonDesties />
                <TrandingSlider />
                <Footer></Footer>
              </>
            }
          />
          <Route path="/personalised-trips" element={<div />} />
          <Route path="/corporate-trips" element={<div />} />
          <Route path="/group-trips" element={<div />} />
          <Route path="/blogs" element={<div />} />
          <Route path="/about" element={<div />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
