import React, { useEffect, useRef } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    name: "Varanasi Ganga Arti",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/gangaarti.jpg",
  },
  {
    id: 2,
    name: "Konarka Sun Temple",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/konarksuntemple.jpg",
  },
  {
    id: 3,
    name: "Goa Beaches",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/goabeach.jpg",
  },
  {
    id: 4,
    name: "Hawa Mahal",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/hawamahal.jpg",
  },
  {
    id: 5,
    name: "Braj Holi in Mathura Vrindavan",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/brajholi.jpg",
  },
  {
    id: 6,
    name: "Shimla",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/shimla.jpg",
  },
];

const ImageSlider = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNextClick = () => {
      let items = document.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]);
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="containerXY">
      <h2 className="slider-heading">Featured Destinations</h2>
      <div className="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button className="btn btn-outline-light">See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
