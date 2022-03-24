import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeComponent from "./pages/home/Home";
import AboutComponent from "./pages/about/About";
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
          path="/about"
          element={(<AboutComponent/>)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;