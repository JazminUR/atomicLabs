import React, { useState } from "react";
import "./stepOne.css";
import { Form } from "react-bootstrap";

const StepOneComponent = ({onChange}) => {
  return (
    <div className="step-one">
      <div className="step-one-title-container">
        <img alt="Paso 1 titulo" src="/assets/images/step-one-title.png"/>
        <h1 className="grl-twhite">
            TE QUEREMOS
            <span className="grl-torange"> CONOCER</span>
          </h1>
      </div>
      <p className="grl-twhite step-one-subtitle">Queremos saber que eres tú, por favor ingresa los siguientes datos:</p>
      <div className="step-one-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNames">
            <Form.Label className="grl-twhite"> Nombre (s)</Form.Label>
            <Form.Control
              className="grl-input-width" 
              type="text" 
              placeholder="Agrega tu nombre"
              onChange={(e) => onChange(e)}
              name="names"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label className="grl-twhite">Apellidos</Form.Label>
            <Form.Control 
              className="grl-input-width" 
              type="text" 
              placeholder="Agrega tus apellidos"
              onChange={(e) => onChange(e)}
              name="lastNames"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default StepOneComponent;