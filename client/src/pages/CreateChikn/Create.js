import React from "react";
import "./Create.css";
import { useEffect } from "react";
import rooster from "../../assets/rooster.svg";
import chicken from "../../assets/chicken.svg";

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
          <input onChange="" name="name" type="text" placeholder="Chikn Id" />
          <input onChange="" name="name" type="text" placeholder="Note to holder" />
          <input onChange="" name="name" type="text" placeholder="Offer price (Avax)" />
          <input onChange="" name="name" type="text" placeholder="Contact(Discord/Twitter)" />
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
          <input onChange="" name="name" type="text" placeholder="Rooster Id" />
          <input onChange="" name="name" type="text" placeholder="Note to holder" />
          <input onChange="" name="name" type="text" placeholder="Offer price (Avax)" />
          <input onChange="" name="name" type="text" placeholder="Contact(Discord/Twitter)" />
          <button onClick="" type="submit">
            <img className="enter-btn" src={rooster} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="showCreate">
        <div className="topContainer">
          <h2>Recent Added Coqs</h2>
        </div>
        <div className="createdEntry">
          <img src="" alt="" />
          <p>Note:</p>
          <p>Offer:</p>
          <p>Contact tag:</p>
        </div>
      </div>
    </>
  );
}
