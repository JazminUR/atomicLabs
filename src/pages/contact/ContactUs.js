import React from "react";
import "./contactUs.css";
import NavbarComponent from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";

const ContactUsComponent = () => {
  return (
    <div>
      <div className="contact-us-bg-blue">
        <NavbarComponent/>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default ContactUsComponent;