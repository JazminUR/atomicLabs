import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeComponent from "./pages/home/Home";
import ContactUsComponent from "./pages/contact/ContactUs";
import './App.css';
import LastSectionComponent from "./pages/lastSection/LastSection";

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
        <Route
          exact 
          path="/last"
          element={(<LastSectionComponent/>)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;