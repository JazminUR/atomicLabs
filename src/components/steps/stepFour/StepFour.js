import React, { useState } from "react";
import "./stepFour.css";
import { FormCheck } from "react-bootstrap";
import ModalComponent from "../../modal/Modal";
import ModalBodyStepFourComponent from "./ModalBodyStepFour";

const StepFourComponent = ({changeStep, data, onChange}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="step-three">
      <br/>
      <span className="grl-c-pointer" onClick={() => changeStep("third")}>&lt; Regresar</span>
      <div className="grl-step-title">
        <img alt="Paso 4 titulo" src="/assets/images/step-four-title.png"/>
        <h1 className="grl-twhite">
            TÉRMINOS Y
            <span className="grl-torange"> CONDICIONES</span>
          </h1>
      </div><br/>
      <p>Por favor revisa nuestros términos y condiciones para este servicio:</p>
      <small> 
        <u className="grl-c-pointer" onClick={() => setOpenModal(true)}>Consulta Términos y Condiciones</u>
      </small><br/><br/>
      <FormCheck 
        className="step-four-check" 
        type="checkbox" 
        label="Acepto los Términos y Condiciones" 
        checked={data.acceptTerms}
        onChange={() => onChange({target:{name:"acceptTerms", value:!data.acceptTerms}})}
      />
      <ModalComponent 
        open={openModal} 
        setOpen={setOpenModal} 
        body={<ModalBodyStepFourComponent/>}
      />
    </div>
  );
}

export default StepFourComponent;