import React from "react";
import style from "./chooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src="/ChooseUs.webp" alt="a lady in background" />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.heading}>
          Introducing<span>Btech TravelWala</span>
        </h1>
        <p className={style.text}>
          We are a team of experienced travelers who have traveled to various
          destinations around the world. We have experienced the best and the
          worst of travel. We have faced the challenges and have come out
          stronger. We have learned from our experiences and have created a
          platform that will help you travel better. We are here to help you
          plan your trip, book your tickets, find the best places to stay, and
          make the most of your travel experience. We are here to make your
          travel experience better.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
