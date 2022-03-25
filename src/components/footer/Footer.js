import React from "react";
import "./footer.css";

const FooterComponent = () => {
  return (
    <footer className="home-footer">
      <span>© 2020 AtomicLabs. Todos los derechos reservados.</span>
      <span className="home-footer-privacity">
        <span>Aviso de privacidad</span>
        <span>
          <img alt="Logo linkedin" src="/assets/images/home-linkedin-tiny.png"/>
          <img alt="Logo twitter" src="/assets/images/home-twitter-tiny.png"/>
        </span>
      </span>
    </footer>
  );
}

export default FooterComponent;