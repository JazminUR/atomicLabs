import React from "react";
import BePartButtonComponent from "../../components/actionButtons/bePartButton/BePartButton";
import NavbarComponent from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";
import "./home.css";
import TableComponent from "../../components/table/Table";

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

        <div className="home-container-sections">
          <h1>
            ¿POR QUÉ 
            <span className="home-torange"> ATOMIC?</span>
          </h1>
          <br/><br/>
          <div className="home-benefits-container">
            <div className="home-benefits-images">
              <div>
                <img alt="imagen astronauta" src="/assets/images/home-astronaut-img.png"/>
                <ul className="home-benefits-list">
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
                  <span> Usamos las tecnologías más modernas. </span><br/>
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/> 
                  <span> Innovamos y creamos proyectos retadores.</span>
                </ul>
              </div>
              <div>
                <img alt="imagen persona" src="/assets/images/home-person-img.png"/>
                <ul className="home-benefits-list">
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
                  <span> ¡Trabajamos en equipo rumbo al éxito!</span><br/>
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/> 
                  <span> No tenemos código de vestimenta</span>
                </ul>
              </div>
              <div>
                <img alt="imagen astronauta2" src="/assets/images/home-astronaut2-img.png"/>
                <ul className="home-benefits-list">
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
                  <span> Realizamos actividades para tu bienestar.</span><br/>
                  <img alt="palomita" src="/assets/images/home-check-tiny.png"/> 
                  <span> ¡Tenemos un parque frente a la oficina!</span>
                </ul>
              </div> 
            </div>
          </div>
        </div>
        <div className="home-table-container">
          <TableComponent/>
        </div>
        <div className="home-last-be-part-btn">
          <BePartButtonComponent/>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default HomeComponent;