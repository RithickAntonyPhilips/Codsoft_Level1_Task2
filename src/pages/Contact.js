
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.modules.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import visitingCard from "../Assests/VC.jpg";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="info">
          <h2 data-aos="fade-up">Contact Us</h2>
          
          <div className="visiting-card" data-aos="zoom-in">
            <img src={visitingCard} alt="Visiting Card" />
          </div>

          <p data-aos="fade-right"><span>Name:</span> Prabha Mohan</p>
          <p data-aos="fade-left"><span>Phone:</span> +91 97901 03033</p>
          <p data-aos="fade-right"><span>Email:</span> prabhamakeovers3033@gmail.com</p>
          <p data-aos="fade-left"><span>Instagram:</span> p.r.a.b.h.a.m.a.k.e.o.v.e.r.s</p>
          <p data-aos="fade-right"><span>Facebook:</span> Prabha.makeovers</p>
          <p data-aos="fade-left"><span>Address:</span> 15, Magizhampoo street, Sanjeevi Nagar, Trichy, 620002</p>

          <div className="social-media">
            <a
              href="https://www.instagram.com/p.r.a.b.h.a.m.a.k.e.o.v.e.r.s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1FVanhVKih/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.threads.net/@p.r.a.b.h.a.m.a.k.e.o.v.e.r.s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaThreads />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;