import React, { useState } from "react";
import "./contactUs.css";
import NavbarComponent from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";
import SlideBarComponent from "../../components/slideBar/SlideBar";
import StepOneComponent from "../../components/steps/stepOne/StepOne";
import { Button } from "react-bootstrap";

const ContactUsComponent = () => {
  const [step, setStep] = useState("first");
  const [data, setData] = useState({
    names: "", 
    lastNames: "", 
    phoneNumber: "",
  })
  const handleChange = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [targetName]: value
    });
  }

  const validateFullData = (currentStep) => {
    switch (currentStep) {
      case "first":
        return !(data.names && data.lastNames);
      case "second":
        return !(data.names && data.lastNames && data.phoneNumber);
      default:
        return true;
    }
  }

  const progressByStep = (currentStep) => {
    switch (currentStep) {
      case "first":
        return 20;
      case "second":
        return 40;
      default:
        return 0;
    }
  }

  const handleChangeStep = () => {
    if (step === "first") {
      setStep("second");
    }
    else if (step === "second") {
      setStep("third");
    }
  }

  const renderFormByStep = (currentStep, setCurrentStep) => {
    switch (currentStep) {
      case "first":
        return <StepOneComponent onChange={handleChange}/>;
      case "second":
        return "Segundo paso";
      case "third":
        return "Tercer paso";
      case "four":
        return "Cuarto paso";
      default:
        return "Paso desconocido";
    }
  } 

  const renderImageByStep = (currentStep) => {
    switch (currentStep) {
      case "first":
        return <img alt="imagen 1" src="/assets/images/step-one-img.png"/>;
      case "second":
        return <img alt="imagen 2" src="/assets/images/step-two-img.png" style={{ marginTop: "-80px", width: "100%"}}/>;
      default:
        return <img alt="imagen 1" src="/assets/images/step-one-img.png"/>;
    }
  }

  return (
    <div>
      <div className="contact-us-bg-blue">
        <NavbarComponent/>
        <div className="contact-us-container">
          <div style={{ width: "800px" }}>
            <SlideBarComponent progress={progressByStep(step)}/>
            {renderFormByStep(step, setStep)}
            <Button 
              className="contact-us-button" 
              disabled={validateFullData(step)}
              onClick={() => handleChangeStep()}
            >
              Enviar
            </Button>
          </div>
          <div style={{ width: "450px" }}>
            {renderImageByStep(step)}
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default ContactUsComponent;