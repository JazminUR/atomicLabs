import React from "react";
import "./stepThree.css";
import { Form } from "react-bootstrap";

const StepThreeComponent = ({onChange, changeStep, data, editPhone, setConfirmData}) => {

  const handleEditPhone = () => {
    changeStep("second");
    editPhone(true);
  }
  const handleResendCode = () => {
    setConfirmData({
      active: true, 
      label: "Te estamos enviando el código", 
      imageUrl: "/assets/images/avion.png", 
      imageStyle: {width: "250px"}});
    setTimeout(() => {
      setConfirmData({
        active: true, 
        label: "Te hemos enviado el código al número que nos proporcionaste", 
        imageUrl: "/assets/images/confirm-done.png",
        imageStyle: null
      });
      setTimeout(() => {
        setConfirmData({
          active: false, 
          label: "", 
          imageUrl: "",
          imageStyle: null
        });
      }, 1500);
    }, 1500);
  }

  return (
    <div className="step-three">
      <br/>
      <span className="grl-c-pointer" onClick={() => changeStep("second")}>&lt; Regresar</span>
      <div className="grl-step-title">
        <img alt="Paso 3 titulo" src="/assets/images/step-three-title.png"/>
        <h1 className="grl-twhite">
            CÓDIGO DE
            <span className="grl-torange"> VERIFICACIÓN</span>
          </h1>
      </div>
      <div className="step-three-subtitle">
        <p>Te enviamos un SMS al número:</p>
        <span>
          +52 55 1850 9196 
          <img 
            className="step-three-pen grl-c-pointer" 
            alt="Lapiz" 
            src="/assets/images/step-three-pen.png"
            onClick={() => handleEditPhone()}
          /> 
        </span><br/><br/>
        <p>Ingresa el código de verificación:</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNames">
            <Form.Label className="grl-twhite"> Código de verificación</Form.Label>
            <Form.Control
              className="grl-input-width" 
              type="text" 
              placeholder="Ingresa tu código"
              onChange={(e) => onChange(e)}
              name="codeNumber"
              value={data.codeNumber}
            />
          </Form.Group>
        </Form>
        <p>¿No recibiste el código? 
          <strong onClick={() => handleResendCode()}>
            {" Reenviar código"}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default StepThreeComponent;