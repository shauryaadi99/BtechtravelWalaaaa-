import React, { useState, useEffect } from "react";
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
    img: "/konarksuntemple2.jpg",
  },
  {
    id: 3,
    name: "Goa Beaches",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/goabeach2.jpg",
  },
  {
    id: 4,
    name: "Hawa Mahal",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/hawamahal2.jpg",
  },
  {
    id: 5,
    name: "Braj Holi in Mathura Vrindavan",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/brajholi1.jpg",
  },
  {
    id: 6,
    name: "Shimla",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt",
    img: "/shimla2.jpg",
  },
];

const ImageSlider = () => {
  const [currentData, setCurrentData] = useState(data);

  const preloadImages = (data) => {
    data.forEach((item) => {
      console.log(item.img);
      console.log(item);
      const img = new Image(); // It creates a new image element in the memory but does not add it to the DOM.
      img.src = item.img; // It sets the src attribute of the image element to the value of the img property of the item object.
    });
  };

  useEffect(() => {
    preloadImages(data);
  }, []);

  const handleNextClick = () => {
    setCurrentData((prevData) => [...prevData.slice(1), prevData[0]]); // It removes the first element from the array and adds it to the end of the array.
  };

  const handlePrevClick = () => {
    setCurrentData((prevData) => [
      prevData[prevData.length - 1],
      ...prevData.slice(0, prevData.length - 1), // It removes the last element from the array and adds it to the beginning of the array.
    ]);
  };

  return (
    <div className="containerXY">
      <h2 className="slider-heading">Featured Destinations</h2>
      <div className="slide">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
            }}
            role="img"
            aria-label={item.name}
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
        <button
          className="prev"
          onClick={handlePrevClick}
          aria-label="Prev Slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="next"
          onClick={handleNextClick}
          aria-label="Next Slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
