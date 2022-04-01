import React, { useState } from "react";
import "./contactUs.css";
import NavbarComponent from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";
import SlideBarComponent from "../../components/slideBar/SlideBar";
import StepOneComponent from "../../components/steps/stepOne/StepOne";
import { Button } from "react-bootstrap";
import StepTwoComponent from "../../components/steps/stepTwo/StepTwo";
import ConfirmComponent from "../../components/confirm/Confirm";
import StepThreeComponent from "../../components/steps/stepThree/StepThree";
import StepFourComponent from "../../components/steps/stepFour/StepFour";
import { useNavigate } from 'react-router-dom';

const ContactUsComponent = () => {
  const [editPhone, setEditPhone] = useState(false);
  const [step, setStep] = useState("first");
  const [data, setData] = useState({
    names: "", 
    lastNames: "", 
    phoneNumber: "",
    codeNumber: "",
    acceptTerms: false,
  });
  const [confirmData, setConfirmData] = useState({
    imageStyle: null,
    imageUrl: "",
    active: false,
    label: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [targetName]: value
    });
  }

  const labelButtonByStep = (currentStep) => {
    switch (currentStep) {
      case "first":
        return "Enviar";
      case "second":
        return "Continuar";
      case "third":
        return "Validar código";
      case "four":
        return "Enviar"
      default:
        return "";
    };
  }

  const validateFullData = (currentStep) => {
    switch (currentStep) {
      case "first":
        return !(data.names && data.lastNames);
      case "second":
        return !(data.names && data.lastNames && data.phoneNumber);
      case "third":
        return !(data.names && data.lastNames && data.phoneNumber && data.codeNumber);
      case "four":
        return !(data.names && data.lastNames && data.phoneNumber && data.codeNumber && data.acceptTerms);
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
        imageUrl: "/assets/images/confirm-done.png",
        active: true,
        label: "Te hemos enviado el código al número que nos proporcionaste",
        imageStyle: null,
      })
      setTimeout(() => {
        setStep("third");
        setConfirmData({
          imageUrl: "",
          active: false,
          label: "",
          imageStyle: null,
        });
        setEditPhone(false);
      }, 1500);
    }
    else if (step === "third") {
      setConfirmData({
        imageUrl: "/assets/images/confirm-done.png",
        active: true,
        label: "Hemos validado el código",
        imageStyle: null,
      });
      setTimeout(() => {
        setStep("four");
        setConfirmData({
          imageUrl: "",
          active: false,
          label: "",
          imageStyle: null,
        });
      }, 1500);
    }
    else if (step === "four") {
      navigate("/last");
    }
  }

  const renderFormByStep = (currentStep, setCurrentStep) => {
    switch (currentStep) {
      case "first":
        return <StepOneComponent onChange={handleChange} data={data}/>;
      case "second":
        return <StepTwoComponent 
                onChange={handleChange} 
                changeStep={setStep} 
                data={data}
                toEdit={editPhone}
                setEdit={setEditPhone}
              />;
      case "third":
        return <StepThreeComponent 
                onChange={handleChange} 
                changeStep={setStep} 
                data={data} 
                editPhone={setEditPhone}
                setConfirmData={setConfirmData}
              />;
      case "four":
        return <StepFourComponent
                changeStep={setStep}
                data={data}
                onChange={handleChange}
        />;
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
      case "third":
        return <img alt="imagen 3" src="/assets/images/step-two-img.png" style={{ marginTop: "-80px", width: "100%"}}/>
      default:
        return <img alt="imagen 4" src="/assets/images/step-four-img.png" style={{ marginLeft: "20px" }}/>;
    }
  }

  return confirmData.active && confirmData.label && confirmData.imageUrl ? (
    <ConfirmComponent 
      label={confirmData.label} 
      imageUrl={confirmData.imageUrl}
      imageStyle={confirmData.imageStyle}
    />
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
              {labelButtonByStep(step)}
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