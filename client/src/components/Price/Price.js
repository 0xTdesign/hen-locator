import React from "react";
import "./Price.css";
import egg from "../../assets/eggtoken.webp";
import fert from "../../assets/ferttoken.png";
import feed from "../../assets/feedtoken.png";
import worm from "../../assets/wormtoken.png";
import avax from "../../assets/avax-token.png";

export default function Price({ pageClass }) {
  return (
    <>
      <div className="price">
        <div className="tokens">
          <ol>
            <div className="token-1">
              <li>
                <img src={egg} alt="Egg logo"></img>
              </li>
              <span id="egg">$</span>
            </div>
            <div className="token-1">
              <li>
                <img src={feed} alt="Feed logo"></img>
              </li>
              <span id="feed">$</span>
            </div>
            <div className="token-1">
              <li>
                <img src={fert} alt="Fert logo"></img>
              </li>
              <span id="fert">$</span>
            </div>
            <div className="token-1">
              <li>
                <img src={worm} alt="Worm logo"></img>
              </li>
              <span id="worm">$</span>
            </div>
            <div className="token-1">
              <li>
                <img src={avax} alt="Avax logo"></img>
              </li>
              <span id="avax">$</span>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
}
