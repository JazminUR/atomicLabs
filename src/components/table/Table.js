import React from "react";
import "./table.css";

const TableComponent = () => {
  return (
    <table className="home-table">
      <tr>
        <th className="home-table-padding home-table-first-title">CARACTERÍSTICAS</th>
        <th className="home-table-padding home-table-second-title home-table-center">OTROS</th>
        <th className="home-table-padding home-table-big-title home-table-center home-table-bg-blue home-table-br-top-right">ATOMIC</th>
      </tr>
      <tr>
        <td className="home-table-padding">Equipo inclusivo, honesto y auténtico</td>
        <td className="home-table-image-center">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
        <td className="home-table-image-center home-table-bg-blue">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
      <tr>
        <td className="home-table-padding">Puntualidad es nuestro segundo nombre</td>
        <td className="home-table-image-center">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
        <td className="home-table-image-center home-table-bg-blue">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
      <tr>
        <td className="home-table-padding">Siempre innovamos en nuestros productos</td>
        <td className="home-table-image-center">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
        <td className="home-table-image-center home-table-bg-blue">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
      <tr>
        <td className="home-table-padding">Te ayudamos a crecer e implementar nuevos conocimientos</td>
        <td></td>
        <td className="home-table-image-center home-table-bg-blue">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
      <tr>
        <td className="home-table-padding">Nos preocupamos por tu bienestar</td>
        <td></td>
        <td className="home-table-image-center home-table-bg-blue">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
      <tr>
        <td className="home-table-padding home-table-last-element">El respeto es una parte fundamental</td>
        <td></td>
        <td className="home-table-image-center home-table-bg-blue home-table-br-bottom-right home-table-last-element">
          <img alt="palomita" src="/assets/images/home-check-tiny.png"/>
        </td>
      </tr>
    </table>
  );
}

export default TableComponent;