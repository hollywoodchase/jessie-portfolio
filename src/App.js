import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
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
        <Routes basename="/jessie-portfolio">
          <Route path="/jessie-portfolio/" element={<About />} />
          <Route path="/jessie-portfolio/shop" element={<Home />} />
          <Route path="/jessie-portfolio/artgallery" element={<ArtGallery />} />
          <Route path="/jessie-portfolio/misc" element={<Misc />} />
        </Routes>
      </div>
    );
  }
}
