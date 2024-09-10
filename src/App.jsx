import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import  Navbar  from './Componants/Navbar';
import About from "./Componants/Pages/About";
import Contact from "./Componants/Pages/Contact";
import Home from "./Componants/Pages/Home";
import Services from "./Componants/Pages/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;