import React, { useState } from "react";
import "./contactUs.css";
import NavbarComponent from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";
import SlideBarComponent from "../../components/slideBar/SlideBar";
import StepOneComponent from "../../components/steps/stepOne/StepOne";
import { Button } from "react-bootstrap";
import StepTwoComponent from "../../components/steps/stepTwo/StepTwo";
import ConfirmComponent from "../../components/confirm/Confirm";

const ContactUsComponent = () => {
  const [step, setStep] = useState("first");
  const [data, setData] = useState({
    names: "", 
    lastNames: "", 
    phoneNumber: "",
  });
  const [confirmData, setConfirmData] = useState({
    active: false,
    label: "",
  });

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
      case "third":
        return 60;
      case "four":
        return 100;
      default:
        return 0;
    }
  }

  const handleChangeStep = () => {
    if (step === "first") {
      setStep("second");
    }
    else if (step === "second") {
      setConfirmData({
        active: true,
        label: "Te hemos enviado el código al número que nos proporcionaste"
      })
      setTimeout(() => {
        setStep("third");
        setConfirmData({
          active: false,
          label: "",
        });
      }, 1500);
    }
  }

  const renderFormByStep = (currentStep, setCurrentStep) => {
    switch (currentStep) {
      case "first":
        return <StepOneComponent onChange={handleChange} data={data}/>;
      case "second":
        return <StepTwoComponent onChange={handleChange} changeStep={setStep} data={data}/>;
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

  return confirmData.active && confirmData.label ? (
    <ConfirmComponent label={confirmData.label}/>
  ) : (
    <div>
      <div className="contact-us-bg-blue">
        <NavbarComponent/>
        <div className="contact-us-container">
          <div style={{ width: "800px" }}>
            <SlideBarComponent progress={progressByStep(step)} currentStep={step}/>
            {renderFormByStep(step, setStep)}
            <Button 
              className="contact-us-button" 
              disabled={validateFullData(step)}
              onClick={() => handleChangeStep()}
            >
              {step === "first" ? "Enviar" : "Continuar"}
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