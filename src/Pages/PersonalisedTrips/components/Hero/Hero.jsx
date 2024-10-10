import React from "react";
import NavBar from "../../../HomePage/component/Hero/NavBar/NavBar";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.mainContainer}>
      <NavBar></NavBar>
      <div className={style.heroContainer}>
        <h1>
          Discover the <br />
          most engaging <br />
          places
        </h1>
        <p>
          Plan your perfect getaway with a personalized
          <br />
          trip tailored just for you!
        </p>
        <div>
          <button className="btn btn-outline-light">Design Your Journey</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
