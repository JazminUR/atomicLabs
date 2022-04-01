import React from 'react';
import "./confirm.css";

const ConfirmComponent = ({label, imageUrl, imageStyle}) => {
  return (
    <div className="confirm-component">
      <div className="confirm-component-child">
        <img alt="confirmación icon" src={imageUrl} style={imageStyle}/>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default ConfirmComponent;