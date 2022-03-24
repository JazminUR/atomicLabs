import React from "react";
import BePartButtonComponent from "../../components/actionButtons/bePartButton/BePartButton";
import NavbarComponent from "../../components/navbar/Navbar";
import "./home.css";

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home-bg-img">
        <NavbarComponent/>
        <div className="home-container">
          <div>
            <img alt="Imagen astronauta" src="/assets/images/home-astronauta1.png" />
          </div>
          <div className="home-text">
            <h1>
              <span className="home-twhite">Desarrolla todo </span>
              <span className="home-torange">tu POTENCIAL </span>
              <span className="home-twhite">dentro del equipo </span>
              <span className="home-torange">ATOMIC</span>
              <span className="home-twhite">LABS</span>
            </h1>
            <br/>
            <BePartButtonComponent/>
          </div>
        </div>
        <div className="home-know-more">
          <span>
            <img alt="Icono saber más" src="/assets/images/home-know-more.png" />
            <p>Quiero saber más</p>
          </span>
        </div>
      </div>
      <div className="home-bg-blue">
        <div className="home-container-sections">
          <h1>
            SOMOS EL BRAZO DERECHO
            <span className="home-torange"> DE LA TECNOLOGÍA</span>
          </h1>
          <br/><br/>
          <div className="home-cards">
            <div className="home-white-card home-card-left">
              <img alt="imagen mundo" src="/assets/images/home-world-explore.png"/>
              <hr className="home-line-divider-orange"/>
              <h4>EXPLORA</h4>
              <ul>
                <li>Innovación y <strong>creación tecnológica</strong></li>
                <li><strong>UX/UI</strong></li>
                <li><strong>Innovación</strong></li>
              </ul>
            </div>
            <div className="home-red-card">
            <img alt="imagen foco" src="/assets/images/home-focus-img.png"/>
              <hr className="home-line-divider-white"/>
              <h4>IMAGINA</h4>
              <ul>
                <li>Estrategia <strong>Digital</strong></li>
                <li>Big Data & <strong>Analysis</strong></li>
                <li><strong>Consultoría</strong> Tecnológica</li>
                <li><strong>Reducción</strong> de costos TI</li>
              </ul>
            </div>
            <div className="home-white-card home-card-right">
            <img alt="imagen foco" src="/assets/images/home-world-img.png"/>
              <hr className="home-line-divider-orange"/>
              <h4>CONQUISTA</h4>
              <ul>
                <li>Desarrollo tecnológico <strong>a la medida</strong></li>
                <li><strong>Ciberseguridad</strong></li>
                <li><strong>Servicios de la Nube</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-container-sections">
          <h1>
            ¡TE ENCANTARÁ 
            <span className="home-torange"> TRABAJAR CON NOSOTROS!</span>
          </h1>
          <img alt="Imagen trabaja con nosotros" src="/assets/images/home-work-with-us.png" />
          <div className="home-steps-with-us">
            <span>
              Contratación remota
            </span>
            <span className="home-steps-arrow">
              &#8594;
            </span>
            <span>
              Entrevista con el aréa de RH
            </span>
            <span className="home-steps-arrow">
              &#8594;
            </span>
            <span>
              Prueba práctica
            </span>
            <span className="home-steps-arrow">
              &#8594;
            </span>
            <span>
              Entrevista técnica
            </span>
          </div>
          <br/><br/><br/>
          <BePartButtonComponent/>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;