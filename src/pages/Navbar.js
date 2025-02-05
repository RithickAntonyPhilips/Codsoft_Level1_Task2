import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.modules.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" data-aos="fade-right">
        <h2>Prabha Makeovers</h2>
      </div>
      <ul className="nav-links" data-aos="fade-left">
        <li>
          <Link to="home" smooth={true} duration={200} className="nav-item">
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={400} className="nav-item">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={600} className="nav-item">
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800} className="nav-item">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;