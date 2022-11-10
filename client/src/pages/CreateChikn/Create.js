import React from "react";
import "./Create.css";
import { useEffect } from "react";
import rooster from "../../assets/rooster.svg";
import chicken from "../../assets/chicken.svg";
import CardChikn from "../../components/Card/CardChikn";
import CardRoostr from "../../components/Card/CardRoostr";

export default function Create({
  setpageClass,
  createNewRoostr,
  createNewChikn,
  createChiknForm,
  createRoostrForm,
  offersChikn,
  offersRoostr,
  handleChangeCreateChikn,
  handleChangeCreateRoostr,
  deleteChikn,
  deleteRoostr,
}) {
  const submitCreateChikn = (e) => {
    e.preventDefault();
    createNewChikn();
  };

  const submitCreateRoostr = (e) => {
    e.preventDefault();
    createNewRoostr();
  };

  useEffect(() => {
    setpageClass("create");
  }, []);
  return (
    <>
      <div className="createChikn space">
        <div className="topContainer">
          <h2>Locate a Coq </h2>
        </div>
        <form className="form-create" onSubmit={submitCreateChikn}>
          <input
            onChange={handleChangeCreateChikn}
            name="chiknId"
            type="text"
            placeholder="Chikn Id"
            maxLength="20"
            value={createChiknForm.chiknId}
          />
          <input
            onChange={handleChangeCreateChikn}
            name="note"
            value={createChiknForm.note}
            type="text"
            placeholder="Note to holder"
            maxLength="20"
          />
          <input
            onChange={handleChangeCreateChikn}
            value={createChiknForm.price}
            name="price"
            type="text"
            placeholder="Offer price (Avax)"
            maxLength="20"
          />
          <input
            onChange={handleChangeCreateChikn}
            name="contact"
            type="text"
            placeholder="Contact(Discord/Twitter)"
            maxLength="20"
            value={createChiknForm.contact}
          />
          <button type="submit">
            <img className="enter-btn" src={chicken} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="createRooster space">
        <div className="topContainer">
          <h2>Locate a Rooster </h2>
        </div>
        <form className="form-create" onSubmit={submitCreateRoostr}>
          <input
            onChange={handleChangeCreateRoostr}
            name="roostrId"
            type="text"
            placeholder="Rooster Id"
            maxLength="20"
            value={createRoostrForm.roostrId}
          />
          <input
            onChange={handleChangeCreateRoostr}
            name="note"
            type="text"
            placeholder="Note to holder"
            maxLength="20"
            value={createRoostrForm.note}
          />
          <input
            onChange={handleChangeCreateRoostr}
            name="price"
            type="text"
            placeholder="Offer price (Avax)"
            maxLength="20"
            value={createRoostrForm.price}
          />
          <input
            onChange={handleChangeCreateRoostr}
            name="contact"
            type="text"
            placeholder="Contact(Discord/Twitter)"
            maxLength="20"
            value={createRoostrForm.contact}
          />
          <button type="submit">
            <img className="enter-btn" src={rooster} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="showCreate">
        <div className="topContainer">
          <h2>Recent Added Coqs</h2>
        </div>

        <CardChikn offersChikn={offersChikn} deleteChikn={deleteChikn} />
        <CardRoostr offersRoostr={offersRoostr} deleteRoostr={deleteRoostr} />
      </div>

      <div className="button-coop">
        <a href="/Coop">
          <button className="coop-btn">Enter the Coop</button>
        </a>
      </div>
    </>
  );
}
