import "./Reset.css";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Price from "./components/Price/Price";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Chikn from "./pages/Chikn/Chikn";
import Edgyeggs from "./pages/Edgyeggs/Edgyeggs";

function App() {
  const [pageClass, setpageClass] = useState("home");

  return (
    <BrowserRouter>
      <p className="design">
        <a href="https://www.freepik.com">Image designed by Upklyak - Freepik.com</a>
      </p>
      <div className={`App mainContainer ${pageClass}`}>
        <Header />
        <Price />
        <Content />
        <Footer />
        <Routes>
          <Route path="/" element={<Home setpageClass={setpageClass} />} />
          <Route path="/About" element={<About setpageClass={setpageClass} />} />
          <Route path="/Chikn" element={<Chikn setpageClass={setpageClass} />} />
          <Route path="/Edgyeggs" element={<Edgyeggs setpageClass={setpageClass} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
