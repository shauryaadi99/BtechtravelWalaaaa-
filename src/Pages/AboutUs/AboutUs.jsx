import React from "react";
import Hero from "./Component/HeroAbout/HeroAbout";
import ChooseUs from "./Component/ChooseUs/ChooseUs";
import MeetTheTeam from "./Component/MeetTheTeam/MeetTheTeam";
import OurHeroes from "./Component/OurHeroes/OurHeroes";
import Footer from "../HomePage/component/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <ChooseUs />
      <MeetTheTeam />
      <OurHeroes />
      <Footer />
    </>
  );
};

export default AboutUs;
