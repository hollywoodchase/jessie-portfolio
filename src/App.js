import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import ArtGallery from "./components/ArtGallery";
import About from "./components/About";
import Misc from "./components/Misc";
import NavBar from "./components/NavBar";
import "./App.css";



export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/artgallery" element={<ArtGallery />} />
          <Route path="/misc" element={<Misc />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </div>
    );
  }
}
