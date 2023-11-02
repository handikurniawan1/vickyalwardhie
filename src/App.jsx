import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Service from "./components/service";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Equiversa from "./pages/equiversa";
import Home from "./pages/Home";
import Modern from "./pages/modern";
import ParalelUrban from "./pages/paralelUrban";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equiversaoffice" element={<Equiversa />} />
          <Route path="/modernminimalis" element={<Modern />} />
          <Route path="/paralelurbanfarm" element={<ParalelUrban />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
