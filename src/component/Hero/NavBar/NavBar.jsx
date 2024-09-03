import React from "react";
import "./navbar.css";

const navLinks = [
  {
    title: "Personalised Trips",
    url: "/personalised-trips",
  },
  {
    title: "Corporate Trips",
    url: "/corporate-trips",
  },
  {
    title: "Group Trips",
    url: "/group-trips",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "About",
    url: "/about",
  },
];

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logoContainer"></div>
      <div className="navLinksContainer">
        {navLinks.map((navLink) => (
          <a href={navLink.url} className="navLink" key={navLink.title}>
            {navLink.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
