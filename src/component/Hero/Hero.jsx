import React from "react";
import NavBar from "./NavBar/NavBar";
import "./hero.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Hero = () => {
  return (
    <>
      <div className="mainContainer">
        <NavBar></NavBar>
        <motion.div
          className="heroContainer"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="heroTitle" variants={variants}>
            <h1>EXPLORE</h1>
            <h3>THE GLOBE</h3>
          </motion.div>
          <motion.div className="heroMainPara" variants={variants}>
            <p>
              Explore tailored travel experiences for individual, corporate, and
              group trips, featuring a personalized trip calculator to design
              your perfect adventure.
            </p>
          </motion.div>
          <motion.div className="heroBtn" variants={variants}>
            <button className="btn btn-outline-light">Explore</button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
