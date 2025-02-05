import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.modules.css";
import pic from "../Assests/Prabha.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <div className="photo" data-aos="fade-right">
        <img src={pic} alt="About" />
      </div>
      <div className="details" data-aos="fade-left">
        <h2>Prabha Mohan</h2>
        <p>
          I am a skilled and passionate makeup artist with a deep love for enhancing natural beauty. With years of 
          experience in the industry, I have developed an exceptional ability to create flawless looks for any occasion, 
          from weddings to photoshoots and special events. Known for my keen eye for detail, I excel in both traditional 
          and contemporary makeup styles, ensuring each client feels confident and radiant.  
          <br /><br />
          I stay updated with the latest trends and techniques, offering personalized services tailored to individual 
          needs. My goal is to bring out the best version of my clients while making them feel comfortable and beautiful. 
          Whether it's a bold, dramatic look or a soft, natural glow, I am dedicated to delivering excellence every time.
        </p>
      </div>
    </div>
  );
};

export default About;