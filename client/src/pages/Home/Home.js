import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="topContainer">
        <h1>Welcome </h1>
      </div>
      <div className="bottomContainer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non amet modi voluptatem ullam nihil nobis</p>
        <button type="button" className="welcome-btn">
          <a href="/Chikn">Explore</a>
        </button>
      </div>
    </div>
  );
}
