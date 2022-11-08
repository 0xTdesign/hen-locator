import React from "react";
import "./Create.css";
import { useEffect } from "react";
import rooster from "../../assets/rooster.svg";
import chicken from "../../assets/chicken.svg";
import CardChikn from "../../components/Card/CardChikn";
import CardRoostr from "../../components/Card/CardRoostr";

export default function Create({
  setpageClass,
  getSearchChikn,
  getSearchRoostr,
  formChiknSearch,
  handleChangeCreate,
  createNewRoostr,
  createNewChikn,
  createChiknForm,
  createRoostrForm,
  handleSearch,
  allBirds,
  roostrSearch,
  chiknSearch,
}) {
  const submitCreateBird = (e) => {
    e.preventDefault();
    getSearchChikn();
    getSearchRoostr();
    createNewRoostr();
    createNewChikn();
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
        <form className="form-create" onSubmit={submitCreateBird}>
          <input
            onChange={handleSearch}
            name="chiknId"
            type="text"
            placeholder="Chikn Id"
            maxlength="20"
            value={formChiknSearch.chiknId}
          />
          <input
            onChange={handleChangeCreate}
            name="note"
            value={createChiknForm.note}
            type="text"
            placeholder="Note to holder"
            maxlength="20"
          />
          <input
            onChange={handleChangeCreate}
            value={createChiknForm.price}
            name="price"
            type="text"
            placeholder="Offer price (Avax)"
            maxlength="20"
          />
          <input
            onChange={handleChangeCreate}
            name="contact"
            type="text"
            placeholder="Contact(Discord/Twitter)"
            maxlength="20"
            value={createChiknForm.contact}
          />
          <button onClick="" type="submit">
            <img className="enter-btn" src={chicken} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="createRooster space">
        <div className="topContainer">
          <h2>Locate a Rooster </h2>
        </div>
        <form className="form-create" onSubmit={submitCreateBird}>
          <input
            onChange={handleSearch}
            name="name"
            type="text"
            placeholder="Rooster Id"
            maxlength="20"
            value={formChiknSearch.roostrId}
          />
          <input
            onChange={handleChangeCreate}
            name="name"
            type="text"
            placeholder="Note to holder"
            maxlength="20"
            value={createRoostrForm.note}
          />
          <input onChange={handleChangeCreate} name="name" type="text" placeholder="Offer price (Avax)" maxlength="20" />
          <input
            onChange={handleChangeCreate}
            name="name"
            type="text"
            placeholder="Contact(Discord/Twitter)"
            maxlength="20"
            value={createRoostrForm.price}
          />
          <button onClick="" type="submit">
            <img className="enter-btn" src={rooster} alt="Rooster" />
          </button>
        </form>
      </div>
      <div className="showCreate">
        <div className="topContainer">
          <h2>Recent Added Coqs</h2>
        </div>
        <CardChikn allBirds={allBirds} chiknSearch={chiknSearch} />
        <CardRoostr allBirds={allBirds} roostrSearch={roostrSearch} />
      </div>
    </>
  );
}
