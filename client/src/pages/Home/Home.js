import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="topContainer">
        <h1 className="welcome">Welcome to Hen locator </h1>
      </div>
      <div className="bottomContainer">
        <p>
          This website is designed to try and match you with your favorite Coq. Everything on this site is for entertainment
          purpose only. Please make sure you always do your own research and diligence.
        </p>
        <button type="button" className="welcome-btn">
          <a href="/Coop">Enter the Coop</a>
        </button>
      </div>
    </div>
  );
}
