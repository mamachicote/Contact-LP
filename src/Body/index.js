import React from "react";
import "./styles.css";

const Body = () => {
  return (
    <div className="Body">
      <section className="Body_left"></section>
      <section className="Body_center">
        <div className="Body_center-about">
          <h2 className="Body_center-about-title">¿Quiénes somos?</h2>
          <p className="Body_center-about-text">
            Somos un equipo de abogadas, recibidas de la Universidad Abierta
            Interamericana, con orientación en derecho de familia y sucesiones.
            Nuestro estudio está dedicado a atender las necesidades de nuestros
            clientes, brindando un adecuado asesoramiento y también, los
            acompañamos en las distintas etapas del proceso. Nos enfocamos en
            brindar un servicio que se caracterice por la lealtad y compromiso
            hacia nuestros clientes. Para nosotras es fundamental ser
            transparentes en nuestra gestión y explicar de la manera más clara
            posible los pasos a seguir en cada caso. El equipo está habilitado
            para trabajar en la Ciudad Autónoma de Buenos Aires. Además,
            contamos con colegas matriculados en la Provincia.
          </p>
        </div>
        <h2 className="Body_center-services-title">Nuestros servicios</h2>
        <div className="Body_center-services">
          <div className="Body_center-services-left">
            <p className="Body_center-services-1">
              <b>Derecho de Familia</b>: divorcios, responsabilidad parental,
              régimen comunicacional, cuota alimentaria, impedimento de
              contacto, liquidación de la sociedad conyugal.
            </p>
            <p className="Body_center-services-2">
              <b>Sucesiones</b>: testamentos, particiones, declaratoria de
              herederos.
            </p>
          </div>
          <div className="Body_center-services-right">
            <p className="Body_center-services-4">
              <b>Derecho civil y del consumidor</b>: mediaciones, desalojos,
              reclamos y descargos administrativos contra organismos públicos y
              privados como Bancos.
            </p>
            <p className="Body_center-services-3">
              <b>Derecho laboral</b>: despidos, diferencias salariales,
              conciliaciones y accidentes de trabajo.
            </p>
          </div>
        </div>
      </section>
      <section className="Body_right"></section>
    </div>
  );
};

export default Body;
