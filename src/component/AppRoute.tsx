import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "../pages/About";
import NavBar from "./NavBar";



const APPRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
        <NavBar/>
        <Home />
    </>
 } />,
        <Route path="/contact" element={
          <>
        
        <Contact />
          </>
        } />,
        <Route path="/about" element={<About/>} />
      </Routes>
        
    </>
  );
};

export default APPRoute;
