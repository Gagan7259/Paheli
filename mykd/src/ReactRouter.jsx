import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Componets/Header/Navbar";
import Homecomponent1 from "./Pages/Home/Home 1/Homecomponent1";
function ReactRouter() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/home" element={<Homecomponent1 />} />
        <Route path="/home" element={<Homecomponent1 />} />

      </Routes>
    </Router>
  );
}

export default ReactRouter;
