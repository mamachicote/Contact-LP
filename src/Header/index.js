import React from "react";
import { FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="Navbar_title">
        <h1 className="Navbar_title-firts">Estudio Jurídico B & D.</h1>
        <h3 className="Navbar_title-second">Dras. Beorlegui y Díaz</h3>
      </div>
      <div className="Navbar_main-container">
        <h5>
          <ul className="Navbar_main-menu">
            <li>Inicio</li>
            <li>¿Quiénes somos?</li>
            <li>Nuestros servicios</li>
            <li>Contacto</li>
          </ul>
        </h5>
      </div>
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
      </div>
    </header>
  );
};

export default Navbar;
