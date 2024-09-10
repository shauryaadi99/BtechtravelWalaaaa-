import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./HappyCustomers.css";

const HappyCustomers = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (counterOn) {
      setIsAnimated(true);
    }
  }, [counterOn]);

  const handleEnter = () => {
    if (!isAnimated) {
      setCounterOn(true);
    }
  };

  return (
    <div className="contain">
      <ScrollTrigger onEnter={handleEnter}>
        <div
          className={`section section-work-data ${
            isAnimated ? "animated" : ""
          }`}
        >
          <div className="heavy">
            <h2>Trusted Vendors</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={0} end={50} duration={4} delay={0} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Happy Customers</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={100} end={600} duration={5} delay={0} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Region Unlocked</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={0} end={10} duration={5} delay={0} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Rating</h2>
            <p className="counter-numbers">4.5/5</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default HappyCustomers;
