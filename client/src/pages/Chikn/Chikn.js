import React from "react";
import { useEffect, useState } from "react";
import "./Chikn.css";
import chicken from "../../assets/chicken.svg";
import rooster from "../../assets/rooster.svg";
import SelectedChikn from "../../components/SelectedBird/SelectedChikn";
import SelectedRoostr from "../../components/SelectedBird/SelectedRoostr";

export default function Chikn({
  setpageClass,
  handleSearch,
  getSearchChikn,
  getSearchRoostr,
  roostrSearch,
  chiknSearch,
  formChiknSearch,
  reports,
  chiknDetails,
  getDetailsChikn,
  getDetailsRooster,
  roostrDetails,
}) {
  const [showModalChikn, setshowModalChikn] = useState(false);
  const [showModalRoostr, setshowModalRoostr] = useState(false);

  const [activeChikn, setactiveChikn] = useState({});

  const [activeRoostr, setactiveRoostr] = useState({});

  // useEffect(() => {
  //   setpageClass("chikn");
  // }, []);

  const formSubmitChikn = (event) => {
    console.log(event);
    event.preventDefault();
    getDetailsChikn();
    getSearchChikn();
    getDetailsRooster();
    getSearchRoostr();
  };

  const handleModalChikn = (event) => {
    event.preventDefault();
    setshowModalChikn(!showModalChikn);
    setactiveChikn({
      ...chiknDetails,
      ...chiknSearch,
    });
  };

  const handleModalRoostr = (event) => {
    event.preventDefault();
    setshowModalRoostr(!showModalRoostr);
    setactiveRoostr({ ...roostrDetails, ...roostrSearch });
  };

  return (
    <>
      {showModalChikn && <SelectedChikn activeChikn={activeChikn} handleModalChikn={handleModalChikn} />}
      {showModalRoostr && <SelectedRoostr activeRoostr={activeRoostr} handleModalRoostr={handleModalRoostr} />}
      <div className="feed-stats ">
        <div className="topContainer">
          <h2>Feed</h2>
        </div>
        <div className="bottomContainer-chikn">
          <p>Minted: {Math.ceil(reports.feedMinted)}</p>
          <p>Burn: {Math.ceil(reports.feedBurned)}</p>
        </div>
      </div>
      <div className="worm-stats ">
        <div className="topContainer">
          <h2>Quick Stats</h2>
        </div>
        <div className="bottomContainer-chikn">
          <p>Chikn KG:{chiknDetails.kg} </p>
          <p>Chikn Rarity: {chiknDetails.rarity}</p>
          <div className="line"></div>
          <p>Roostr KG:{roostrDetails.kg} </p>
          <p>Roostr Rarity: {roostrDetails.rarity}</p>
        </div>
      </div>
      <div className="egg-stats ">
        <div className="topContainer">
          <h2>Egg</h2>
        </div>
        <div className="bottomContainer-chikn">
          <p>Minted: {Math.ceil(reports.eggMinted)} </p>
          <p>Burn: {Math.ceil(reports.eggBurned)} </p>
        </div>
      </div>
      <div className="search">
        <div className="topContainer">
          <h2>Coq Search</h2>
        </div>
        <div className="chikn-container">
          <div className="chikn-search">
            <form className="form-search-chikn" onSubmit={formSubmitChikn}>
              <input
                onChange={handleSearch}
                value={formChiknSearch.chiknId}
                name="chiknId"
                type="text"
                placeholder="Chikn Id"
              />
              <button type="submit">
                <img className="enter-btn" src={chicken} alt="Chikn" />
              </button>
            </form>
          </div>
          <div className="chikn-search">
            <form className="form-search-chikn" onSubmit={formSubmitChikn}>
              <input
                onChange={handleSearch}
                value={formChiknSearch.roostrId}
                name="roostrId"
                type="text"
                placeholder="Rooster Id"
              />
              <button type="submit">
                <img className="enter-btn" src={rooster} alt="Rooster" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="imageShow ">
        <div className="topContainer">
          <h2>Coq Show</h2>
        </div>
        <div className="imageBottomContainer">
          <div className="chikn-image-container">
            <div className={chiknSearch.image ? "" : "hide"}>
              <p>
                Chikn <br />#{chiknDetails.token}
              </p>
              <div className="click" onClick={handleModalChikn}>
                <img src={chiknSearch.image} alt="Chikn NFT" />
                <p>Click</p>
              </div>
            </div>
          </div>
          <div className="rooster-image-container">
            <div className={roostrSearch.image ? "" : "hide"}>
              <p>
                Roostr <br />#{roostrDetails.token}
              </p>
              <div className="click" onClick={handleModalRoostr}>
                <img src={roostrSearch.image} alt="Rooster NFT" />
                <p>Click</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
