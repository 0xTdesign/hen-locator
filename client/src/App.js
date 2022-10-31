import "./Reset.css";
import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App mainContainer">
      <Header />
      <Content />
    </div>
  );
}

export default App;
