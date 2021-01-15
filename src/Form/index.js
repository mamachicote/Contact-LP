import React, { Fragment, useState } from "react";
import "./styles.css";

const Navbar = (props) => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSummit = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <form className="Form" onSubmit={handleFormSummit}>
        <h1 className="Form_title">Contactanos</h1>
        <input
          type="text"
          className="Form_input"
          name="nombre"
          onChange={handleInputChange}
        />
        <label className="Form_inpute-name-label">Nombre</label>
        <input
          type="text"
          className="Form_input"
          name="apellido"
          onChange={handleInputChange}
        />
        <label className="Form_inpute-name-label">Apellido</label>
        <input
          type="text"
          className="Form_input"
          name="email"
          onChange={handleInputChange}
        />
        <label className="Form_inpute-name-label">Email</label>
        <textarea
          type="textarea"
          className="Form_input"
          name="mensaje"
          onChange={handleInputChange}
        />
        <label className="Form_inpute-name-label">Mensaje</label>
        <button type="submit" className="Form_submit">
          Envíar
        </button>
      </form>
    </Fragment>
  );
};

export default Navbar;
