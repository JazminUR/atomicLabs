import React from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img 
        alt="Logo AtomicLabs" 
        src="/assets/images/atomicLogo.png" 
        className="navbar grl-c-pointer" 
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default NavbarComponent;