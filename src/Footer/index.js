import React from "react";
import { FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="Navbar">
      <div className="Navbar_title"></div>
      <div className="Navbar_contact">
        <a href="https://www.linkedin.com/in/micaela-beorlegui/">
          <FaLinkedin size={25} color="white" />
        </a>
        <a href="https://www.instagram.com/abogadas.ar">
          <FaInstagram size={25} color="white" />
        </a>
        <a href="mailto:micaela.beorlegui@hotmail.com">
          <FaMailBulk size={25} color="white" />
        </a>
        <p>Capital Federal, Buenos Aires. Argentina.</p>
      </div>
    </footer>
  );
};

export default Footer;
