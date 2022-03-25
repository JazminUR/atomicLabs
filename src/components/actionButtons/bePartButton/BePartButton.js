import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./bePartButton.css";

const BePartButtonComponent = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <Button className="bePartButton" onClick={handleClick}>
      ¡Quiero ser parte!
    </Button>
  );
};

export default BePartButtonComponent;