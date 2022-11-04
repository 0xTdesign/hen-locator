import React from "react";
import { useEffect } from "react";
import "./Chikn.css";
import chicken from "../../assets/chicken.svg";
import rooster from "../../assets/rooster.svg";

export default function Chikn({
  setpageClass,
  handleSearch,
  getSearchChikn,
  getSearchRoostr,
  roostrSearch,
  chiknSearch,
  formChiknSearch,
  getReports,
  reports,
}) {
  useEffect(() => {
    setpageClass("chikn");
  }, []);

  return (
    <>
      <div className="feed-stats ">
        <div className="topContainer">
          <h2>Feed</h2>
        </div>
        <div className="bottomContainer">
          <p>Minted: {Math.ceil(reports.feedMinted)}</p>
          <p>Burn: {Math.ceil(reports.feedBurned)}</p>
        </div>
      </div>
      <div className="worm-stats ">
        <div className="topContainer">
          <h2>Worm</h2>
        </div>
        <div className="bottomContainer">
          <p>Worm: </p>
          <p>Burn: </p>
        </div>
      </div>
      <div className="egg-stats ">
        <div className="topContainer">
          <h2>Egg</h2>
        </div>
        <div className="bottomContainer">
          <p>Minted: {Math.ceil(reports.eggMinted)} </p>
          <p>Burn: {Math.ceil(reports.eggBurned)} </p>
        </div>
      </div>
      <div className="search">
        <div className="topContainer">
          <h2>Coq Search</h2>
        </div>
        <div className="chikn-container">
          {/* {!chiknChosen ? <h1 className="popup">Enter Id to see stats</h1> : <h1>{chikn.name}</h1>} */}
          <div className="chikn-search">
            <form className="form-search" onSubmit={getSearchChikn}>
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
            <form className="form-search" onSubmit={getSearchRoostr}>
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
            <p>Chikn</p>
            <div className={chiknSearch.image ? "" : "hide"}>
              <img src={chiknSearch.image} alt="Chikn NFT" />
            </div>
          </div>
          <div className="rooster-image-container">
            <p>Rooster</p>
            <div className={roostrSearch.image ? "" : "hide"}>
              <img src={roostrSearch.image} alt="Rooster NFT" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
