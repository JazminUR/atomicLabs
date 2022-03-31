import React from "react";
import "./slideBar.css";
import { ProgressBar } from "react-bootstrap";

const SlideBarComponent = ({progress, currentStep}) => {
  return (
    <div className="slide-bar-container">
      <div className="slide-bar-steps">
        <span>
          <img 
            alt="Paso 1" 
            src={currentStep !== "first" ? "/assets/images/step-done-small.png" : "/assets/images/step-one-active-small.png"}
          />
        </span>
        <span>
          <img 
            alt="Paso 2" 
            src={currentStep === "second" ? "/assets/images/step-two-active-small.png" : currentStep === "first" ? "/assets/images/step-two-inactive-small.png" : "/assets/images/step-done-small.png"}
          />
        </span>
        <span>
          <img 
            alt="Paso 3" 
            src={currentStep === "third" ? "/assets/images/step-three-active-small.png" : currentStep === "four" ? "/assets/images/step-done-small.png" : "/assets/images/step-three-inactive-small.png"}
          />
        </span>
        <span>
          <img 
            alt="Paso 4" 
            src={currentStep !== "four" ? "/assets/images/step-four-inactive-small.png" : "/assets/images/step-four-active-small.png"}
          />
        </span>
      </div>
      <div>
        <ProgressBar now={progress} className="slide-bar-element"/>
      </div>
    </div>
  );
}

export default SlideBarComponent;