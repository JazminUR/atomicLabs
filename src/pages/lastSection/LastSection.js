import React from "react";
import FooterComponent from "../../components/footer/Footer";
import NavbarComponent from "../../components/navbar/Navbar";
import "./lastSection.css";

const LastSectionComponent = () => {
  return (
    <div>
      <div className="last-section-bg-blue">
        <NavbarComponent/>
        <div className="last-section-container">
          <div className="last-section-text">
            <h1 className="grl-twhite">TUS DATOS</h1>
            <h1 className="grl-torange">HAN SIDO ENVIADOS</h1>
            <h1 className="grl-torange">CON ÉXITO</h1>
            <p>En breve recibirás un correo de confirmación</p>
            <p>por parte del equipo de AtomicLabs.</p>
            <small>Recuerda revisar tu bandeja de SPAM</small><br/>
            <small>¡Esperamos verte pronto!</small>
          </div>
          <div>
            <img alt="Imagen" src="/assets/images/last-section-img.png"/>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default LastSectionComponent;