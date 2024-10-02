import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.svgContainer}>
        <img src="/Untitled_design-removebg.png" alt="footer wrapper png" />
      </div>
      <div className={style.footerContainer}>
        <div className={style.footer}>
          <div className={`${style.container} ${style.paddingRight}`}>
            <h3>BtechTravelWala.com</h3>
            <p>
              BTech TravelWala is a travel company that provides a wide range of
              travel services to its customers like group tours, custom tours,
              and corporate tours. We also provide travel packages for various
              destinations.
            </p>
            <div className={style.logosContainer}>
              <div className={style.logo}>
                <img src="/instagram_icon.png" alt="instagram logo" />
              </div>
              <div className={style.logo}>
                <img src="/sl_z_072523_61700_01.jpg" alt="X logo" />
              </div>
              <div className={style.logo}>
                <img src="/386622_facebook_icon.png" alt="facebook logo" />
              </div>
              <div className={style.logo}>
                <img
                  src="/317725_linkedin_social_icon.png"
                  alt="linkedin logo"
                />
              </div>
            </div>
          </div>
          <div className={`${style.container} ${style.quickLinks}`}>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Group Trips</li>
              <li>Personalised Trips</li>
              <li>Corporate Tours</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className={style.container}>
            <h4>Information</h4>
            <ul>
              <li>Terms and Condition</li>
              <li>Privacy Policy</li>
              <li>Faqs</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div className={style.container}>
            <h4>Contact</h4>
            <ul>
              <li>187 XYZ Nagar, ABC road, Indore</li>
              <li>Madhya Pradesh-457801</li>
              <li>+91 7765467892</li>
              <li>info@yourDomain.com</li>
            </ul>
          </div>
        </div>
        <div className={style.bottomFooter}>
          <p>
            &copy; 2024 BtechTravelWala.com | All Rights Reserved |
            <span> Designed by BtechTravelWala.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
