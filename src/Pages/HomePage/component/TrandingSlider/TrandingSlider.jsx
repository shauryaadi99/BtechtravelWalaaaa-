import React from "react";
import styles from "./TrandingSlider.module.css";
import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";
import img4 from "../../../../assets/img4.jpg";
import img5 from "../../../../assets/img5.jpg";
import img6 from "../../../../assets/img6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TrandingSlider = () => {
  const slideData = [
    {
      title: "Mystical Varanasi: A Journey to the Soul",
      description:
        " Experience the spiritual essence of Varanasi. Witness the Ganga Aarti on the ghats and immerse yourself in the city's deep-rooted traditions.",
      imgSrc: img1,
    },
    {
      title: "The Tranquility of Kerala's Backwaters",
      description:
        "Discover the peaceful backwaters of Kerala, where you can relax on a houseboat and enjoy the lush greenery and traditional village life along the waterways.",
      imgSrc: img2,
    },
    {
      title: "The Vibrant Streets of Mumbai",
      description:
        "Dive into the bustling life of Mumbai, India’s financial capital. From iconic landmarks like the Gateway of India to the vibrant street food scene.",
      imgSrc: img3,
    },
    {
      title: "Royal Heritage in Jaipur",
      description:
        " Explore the royal heritage of Jaipur, the Pink City. Visit grand palaces, majestic forts, and vibrant markets that reflect the rich history and culture of Rajasthan.",
      imgSrc: img4,
    },
    {
      title: "The Serenity of Himachal Pradesh",
      description:
        "Escape to the serene landscapes of Himachal Pradesh, where the mountains offer a perfect retreat. Enjoy trekking and breathe in the fresh mountain air",
      imgSrc: img5,
    },
    {
      title: "Exploring the Rann of Kutch",
      description:
        "Experience the unique beauty of the Rann of Kutch, where the white salt desert stretches as far as the eye can see. Visit during the Rann Utsav for cultural performances, handicrafts, and traditional cuisine.",
      imgSrc: img6,
    },
  ];

  return (
    <>
      <h1 className={styles.sliderHeadinggg}>Blog Posts</h1>
      <Swiper
        slidesPerView={3}
        loop={true}
        style={{ height: "32rem", paddingLeft: "10px", paddingRight: "10px" }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide className={styles.content} key={index}>
            <img src={slide.imgSrc} alt={slide.title} />
            <div className={styles.textContent}>
              <h3 className={styles.heavy}>{slide.title}</h3>
              <p>{slide.description}</p>
              <button className="btn btn-outline-dark">Read more</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrandingSlider;
