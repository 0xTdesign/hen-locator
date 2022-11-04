import React from "react";
import "./Create.css";
import { useEffect } from "react";
import rooster from "../../assets/rooster.svg";
import chicken from "../../assets/chicken.svg";
import chiknNFT from "../../assets/chiknNFT.jpeg";
import roosterNFT from "../../assets/roosterNFT.jpeg";
import Card from "../../components/Card/Card";

export default function Create({ setpageClass }) {
  useEffect(() => {
    setpageClass("create");
  }, []);
  return (
    <>
      <div className="createChikn space">
        <div className="topContainer">
          <h2>Locate a Coq </h2>
        </div>
        <form className="form-create">
          <input onChange="" name="name" type="text" placeholder="Chikn Id" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Note to holder" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Offer price (Avax)" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Contact(Discord/Twitter)" maxlength="20" />
          <button onClick="" type="submit">
            <img className="enter-btn" src={chicken} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="createRooster space">
        <div className="topContainer">
          <h2>Locate a Rooster </h2>
        </div>
        <form className="form-create">
          <input onChange="" name="name" type="text" placeholder="Rooster Id" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Note to holder" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Offer price (Avax)" maxlength="20" />
          <input onChange="" name="name" type="text" placeholder="Contact(Discord/Twitter)" maxlength="20" />
          <button onClick="" type="submit">
            <img className="enter-btn" src={rooster} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="showCreate">
        <div className="topContainer">
          <h2>Recent Added Coqs</h2>
        </div>
        <Card />
      </div>
    </>
  );
}
