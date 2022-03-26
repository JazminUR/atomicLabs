import React from "react";
import "./slideBar.css";
import { ProgressBar } from "react-bootstrap";

const SlideBarComponent = ({progress}) => {
  return (
    <div className="slide-bar-container">
      <div className="slide-bar-steps">
        <span>
          <img alt="Paso 1" src="/assets/images/step-one-active-small.png"/>
        </span>
        <span>
          <img alt="Paso 2" src="/assets/images/step-two-inactive-small.png"/>
        </span>
        <span>
          <img alt="Paso 3" src="/assets/images/step-three-inactive-small.png"/>
        </span>
        <span>
          <img alt="Paso 4" src="/assets/images/step-four-inactive-small.png"/>
        </span>
      </div>
      <div>
        <ProgressBar now={progress} className="slide-bar-element"/>
      </div>
    </div>
  );
}

export default SlideBarComponent;