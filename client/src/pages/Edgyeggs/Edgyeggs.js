import React from "react";
import "./Edgyeggs.css";
import { useEffect, useState } from "react";
import edgyegg from "../../assets/logo-white.svg";
import SelectedEdgyegg from "../../components/SelectedEdgyEgg/SelectedEdgyegg";

export default function Edgyeggs({ getSearchEdgyegg, handleSearchEdgyegg, setpageClass, formEdgyeggSearch, edgyeggSearch }) {
  useEffect(() => {
    setpageClass("edgyeggs");
  }, []);

  const [showModalEdgyegg, setshowModaEdgyegg] = useState(false);

  const [activeEdgyegg, setactiveEdgyegg] = useState({});

  const handleModalEdgyegg = (e) => {
    e.preventDefault();
    setshowModaEdgyegg(!showModalEdgyegg);
    setactiveEdgyegg({ ...edgyeggSearch });
  };

  return (
    <>
      {showModalEdgyegg && <SelectedEdgyegg activeEdgyegg={activeEdgyegg} handleModalEdgyegg={handleModalEdgyegg} />}
      <div className="searchEdgyegg">
        <div className="topContainer">
          <h2>Rarity Checker</h2>
        </div>
        <div className="edgyegg-search">
          <form className="form-search" onSubmit={getSearchEdgyegg}>
            <input
              onChange={handleSearchEdgyegg}
              value={formEdgyeggSearch.tokenId}
              name="tokenId"
              type="text"
              placeholder="EdgyEgg ID"
            />
            <button type="submit">
              <img className="enter-btn" src={edgyegg} alt="Edgyegg" />
            </button>
          </form>
        </div>
      </div>
      <div className="edgyeggimageShow ">
        <div className="topContainer">
          <h2>Egg-cellent</h2>
        </div>
        <div className="imageBottomContainer-Edgyegg">
          <div className="edgyegg-image-container">
            <h2>{edgyeggSearch.name}</h2>
            <div className={edgyeggSearch.image ? "" : "hide"}>
              <div className="click" onClick={handleModalEdgyegg}>
                <img src={edgyeggSearch.image} alt="EdgyEgg NFT" />
                <p>Click</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edgyegg-rank">
        <div className="topContainer">
          <h2>Raritys</h2>
        </div>
        <div className="bottomContainer-edgyegg">
          <p>Mythic:20</p>
          <p>Leggendary:80 </p>
          <p>Eggotic:500 </p>
          <p>Eggceptional:900 </p>
          <p>Eggstraordinary:1600 </p>
          <p>Eggcellent:2500 </p>
          <p>Eggspendable:4400 </p>
        </div>
      </div>
    </>
  );
}
