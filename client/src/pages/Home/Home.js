import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="home-topContainer">
        <h1 className="welcome">Welcome to Hen locator </h1>
      </div>
      <div className="home-bottomContainer">
        <p>
          Have you ever sat there looking at all the Chikn and Roostr in the marketplace and seen one that is not for sale
          and thought? "Dam I want that Coq". Well, this is your time to do something about it. This website is designed to
          try and match you with your favorite Coq. Create a post and put a price and hope the holder gets in touch. Have fun
          Bok Bok
        </p>
        <button type="button" className="welcome-btn">
          <a href="/Coop">Enter the Coop</a>
        </button>
      </div>
    </div>
  );
}
