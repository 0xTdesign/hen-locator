import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="home-topContainer">
        <h1 className="welcome">Welcome to Hen Locator </h1>
      </div>
      <div className="home-bottomContainer">
        <p>
          Have you ever sat there looking at the Chikn and Roostrs in the marketplace and seen one that's not for sale and
          thought to yourself "Damn I want that Coq". Well, this is your time to do something about it. This website is
          designed to match you with your favorite Coq. Create a post, put a price and see if the holder gets in touch. Have
          fun! Bok Bok
        </p>
        <button type="button" className="welcome-btn">
          <a href="/Coop">Enter the Coop</a>
        </button>
      </div>
    </div>
  );
}
