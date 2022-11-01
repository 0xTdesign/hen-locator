import "./Reset.css";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Price from "./components/Price/Price";

function App() {
  return (
    <BrowserRouter>
      <div className="App mainContainer">
        <Header />
        <Price />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
