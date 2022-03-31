import React from 'react';
import "./confirm.css";

const ConfirmComponent = ({label}) => {
  return (
    <div className="confirm-component">
      <div className="confirm-component-child">
        <img alt="confirmación icon" src="/assets/images/confirm-done.png"/>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default ConfirmComponent;