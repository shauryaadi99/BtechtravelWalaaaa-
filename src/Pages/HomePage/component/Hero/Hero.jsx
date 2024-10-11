import React from "react";
import NavBar from "./NavBar/NavBar";
import "./hero.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Variants for framer motion animations
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
      <div
        className="mainContainer"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Use <video> tag to include the local india.mp4 video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          {/* src="/india.mp4" assumes india.mp4 is in the public folder */}
          <source src="/heroback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <NavBar />

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