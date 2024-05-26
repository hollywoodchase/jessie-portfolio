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
          <Route path="/jessie-test/" element={<About />} />
          <Route path="/jessie-test/shop" element={<Home />} />
          <Route path="/jessie-test/artgallery" element={<ArtGallery />} />
          <Route path="/jessie-test/misc" element={<Misc />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </div>
    );
  }
}
