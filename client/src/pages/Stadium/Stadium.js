import React from "react";
import CardWorldCup from "../../components/Card/CardWorldCup";
import "./Stadium.css";
import { useEffect } from "react";

export default function Stadium({ worldCupEgg, setpageClass }) {
  useEffect(() => {
    setpageClass("stadium");
  }, []);
  return (
    <>
      <div className="showAllStadium">
        <div className="topContainer">
          <h2>⚽ Let the games begin ⚽</h2>
        </div>
        <div className="bottomContainer-stadium">
          <div className="stadium-container">
            {/* <span>Flag</span> */}
            <div className="Cardworldcup-display">
              <CardWorldCup worldCupEgg={worldCupEgg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
