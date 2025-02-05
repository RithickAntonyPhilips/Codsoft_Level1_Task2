import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import services from "./service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.modules.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="services-slider">
      <h1 data-aos="fade-up">Our Services</h1>
      <Slider {...settings}>
        {services.map((service, idx) => (
          <div key={idx} className="service-tile" data-aos="zoom-in">
            <img src={service.img} alt={service.name} />
            <span>{service.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;