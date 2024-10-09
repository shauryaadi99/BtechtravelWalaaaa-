import React from "react";
import NavBar from "../../../HomePage/component/Hero/NavBar/NavBar";
import style from "./hero.module.css";
import TripCalculator from "./TripCalculator/TripCalculator";

const Hero = () => {
  return (
    <div className={style.mainContainer}>
      <NavBar></NavBar>
      <div className={style.heroContainer}>
        <div className={style.heroContent}>
          <h1> Get your Personalised Trips</h1>
          <p>Calculate the cost of your trip and get a quote in minutes</p>
        </div>
        <div className={style.calculatorContainer}>
          <h1>Trip Calculator</h1>
          <TripCalculator></TripCalculator>
        </div>
      </div>
    </div>
  );
};

export default Hero;
