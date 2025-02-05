import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.modules.css";
import ML from "../Assests/MainLogo.png";
import slide1 from "../Assests/1.png";
import slide2 from "../Assests/2.png";
import slide3 from "../Assests/3.png";
import slide4 from "../Assests/4.png";
import slide5 from "../Assests/5.png";
import slide6 from "../Assests/6.png";
import slide7 from "../Assests/7.png";
import slide8 from "../Assests/8.png";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={`Slide ${idx + 1}`} className="slide-img" />
            </div>
          ))}
        </Slider>
        <div className="center-logo">
          <img src={ML} alt="Center Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;