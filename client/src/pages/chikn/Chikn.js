import React from "react";
import { useEffect } from "react";
import "./Chikn.css";
import chicken from "../../assets/chicken.svg";
import rooster from "../../assets/rooster.svg";
import chiknNFT from "../../assets/chiknNFT.jpeg";
import roosterNFT from "../../assets/roosterNFT.jpeg";

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
      <div className="search">
        <div className="topContainer">
          <h2>Coq Search</h2>
        </div>
        <div className="chikn-container">
          {/* {!chiknChosen ? <h1 className="popup">Enter Id to see stats</h1> : <h1>{chikn.name}</h1>} */}
          <div className="chikn-search">
            <form className="form-search">
              <input onChange="" name="name" type="text" placeholder="Chikn Id" />
              <button onClick="" type="submit">
                <img className="enter-btn" src={chicken} alt="Chikn" />
              </button>
            </form>
            <div className={chicken.img ? "" : "hide"}></div>
          </div>
          <div className="chikn-search">
            <form className="form-search">
              <input onChange="" name="name" type="text" placeholder="Rooster Id" />
              <button onClick="" type="submit">
                <img className="enter-btn" src={rooster} alt="Rooster" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="imageShow space">
        <div className="topContainer">
          <h2>Coq Show</h2>
        </div>
        <div className="imageBottomContainer">
          <div className="chikn-image-container">
            <p>Chikn</p>
            <img src={chiknNFT} alt="Chikn NFT" />
            {/* <img
              onClick={() => {
                handleModal(chikn);
              }}
              className="chikn-found"
              src={chikn.img}
              alt="chikn"
            /> */}
          </div>
          {/* <div className={rooster.img ? "" : "hide"}> */}
          <div className="rooster-image-container">
            <p>Rooster</p>
            <img src={roosterNFT} alt="Rooster NFT" />
            {/* <img
              onClick={() => {
                handleModal(chikn);
              }}
              className="chikn-found"
              src={rooster.img}
              alt="rooster"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
