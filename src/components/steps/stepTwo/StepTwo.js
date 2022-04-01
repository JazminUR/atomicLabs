import React from "react";
import "./stepTwo.css";
import { Form } from "react-bootstrap";

const StepTwoComponent = ({onChange, changeStep, data, toEdit, setEdit}) => {

  const handleBack = () => {
    setEdit(false);
    changeStep("first");
  }

  return (
    <div className="step-two">
      <br/>
      <span className="grl-c-pointer" onClick={() => handleBack()}>&lt; Regresar</span>
      <div className="grl-step-title">
        <img alt="Paso 2 titulo" src="/assets/images/step-two-title.png"/>
        <h1 className="grl-twhite">
            {toEdit ? "EDITA" : "VALIDA"} TU
            <span className="grl-torange"> CELULAR</span>
          </h1>
      </div>
      <div className="step-two-subtitle">
        <p>Necesitamos validar tu número para continuar</p>
        <small>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</small>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNames">
            <Form.Label className="grl-twhite"> Número de Celular</Form.Label>
            <Form.Control
              className="grl-input-width" 
              type="text" 
              placeholder="Ingresa tu número de teléfono"
              onChange={(e) => onChange(e)}
              name="phoneNumber"
              value={data.phoneNumber}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default StepTwoComponent;