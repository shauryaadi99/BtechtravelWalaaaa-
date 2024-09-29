import React from "react";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import ImageSlider from "./component/carousel/ImageSlider";
import HappyCustomers from "./component/HappyCustomers/HappyCustomers";
import Testimonial from "./component/testimonial/testimonial";
import ContactForm from "./component/ContactForm/ContactForm";
import HoneymoonDesties from "./component/HoneyMoondesties/HoneymoonDesties";
import TrandingSlider from "./component/TrandingSlider/TrandingSlider";
import Footer from "./component/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services></Services>
      <ImageSlider />
      <HappyCustomers />
      <Testimonial />
      <ContactForm />
      <HoneymoonDesties />
      <TrandingSlider />
      <Footer></Footer>
    </>
  );
};

export default HomePage;
