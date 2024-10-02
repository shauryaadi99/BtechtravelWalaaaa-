import React from "react";
import NavBar from "../../../HomePage/component/Hero/NavBar/NavBar";
import style from "./heroabout.module.css";

const Hero = () => {
  return (
    <div className={style.mainContainer}>
      <NavBar />
      <div className={style.heroContainer}>
        <h1 className={style.heading}>ABOUT US</h1>
      </div>
    </div>
  );
};

export default Hero;
