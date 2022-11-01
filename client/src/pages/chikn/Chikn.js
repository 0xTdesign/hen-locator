import React from "react";
import { useEffect } from "react";
import "./Chikn.css";

export default function Chikn({ setpageClass }) {
  useEffect(() => {
    setpageClass("chikn");
  }, []);

  return (
    <>
      <div className="feed-stats space">
        <div className="topContainer">
          <h2>Feed</h2>
        </div>
        <div className="bottomContainer">
          <p>Feed:12345678</p>
          <p>Burn:1234567 </p>
        </div>
      </div>
      <div className="worm-stats space">
        <div className="topContainer">
          <h2>Worm</h2>
        </div>
        <div className="bottomContainer">
          <p>Worm: 1234567</p>
          <p>Burn: 12345678 </p>
        </div>
      </div>
      <div className="egg-stats space">
        <div className="topContainer">
          <h2>Egg</h2>
        </div>
        <div className="bottomContainer">
          <p>Egg: 12345678 </p>
          <p>Burn: 123456789 </p>
        </div>
      </div>
      <div className="search space">
        <div className="topContainer">
          <h2>Coq Search</h2>
        </div>
        <div className="bottomContainer">
          <form action="">
            <input type="text" placeholder="Chikn ID Search" />
            <input type="text" placeholder="Rooster ID Search" />
          </form>
        </div>
      </div>
    </>
  );
}
