import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeComponent from "./pages/home/Home";
import ContactUsComponent from "./pages/contact/ContactUs";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact 
          path="/"
          element={(<HomeComponent/>)}
        />
        <Route
          exact 
          path="/contact"
          element={(<ContactUsComponent/>)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;