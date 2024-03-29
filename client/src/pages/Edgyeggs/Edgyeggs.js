import React from "react";
import "./Edgyeggs.css";
import { useEffect, useState } from "react";
import edgyegg from "../../assets/logo-white.svg";
import SelectedEdgyegg from "../../components/SelectedEdgyEgg/SelectedEdgyegg";
import mintedEggs from "../../mintedeggs.json";
import SelectedTrait from "../../components/SelectedTrait/SelectedTrait";

export default function Edgyeggs({ getSearchEdgyegg, handleSearchEdgyegg, setpageClass, formEdgyeggSearch, edgyeggSearch }) {
  useEffect(() => {
    setpageClass("edgyeggs");
    getMintedRarities();
  }, []);

  const [showModalEdgyegg, setshowModaEdgyegg] = useState(false);

  const [activeEdgyegg, setactiveEdgyegg] = useState({});

  const [mintedRarities, setmintedRarities] = useState({
    Mythic: 0,
    Leggendary: 0,
    Eggotic: 0,
    Eggceptional: 0,
    Eggstraordinary: 0,
    Eggcelent: 0,
    Eggspendable: 0,
  });

  const handleModalEdgyegg = (e) => {
    e.preventDefault();
    setshowModaEdgyegg(!showModalEdgyegg);
    setactiveEdgyegg({ ...edgyeggSearch });
  };

  const getMintedRarities = async () => {
    // const API = ``; // here will be the api call that gets a list of all minted eggs and their rarities
    // const res = await axios.get(API);

    // count the occurance of each rarity
    let Mythic = 0;
    let Leggendary = 0;
    let Eggotic = 0;
    let Eggceptional = 0;
    let Eggstraordinary = 0;
    let Eggcelent = 0;
    let Eggspendable = 0;

    // here we loop through the data and increment each rarity count when it matches (this method only works because we already know the property names)
    // res.data.forEach((egg) => { // we want to use the response from an API call, but we don't have it yet
    mintedEggs.forEach((egg) => {
      // so we just use the json file Tim scraped together
      switch (egg.Rarity) {
        case "Mythic":
          Mythic++;
          break;
        case "Leggendary":
          Leggendary++;
          break;
        case "Eggotic":
          Eggotic++;
          break;
        case "Eggceptional":
          Eggceptional++;
          break;
        case "Eggstraordinary":
          Eggstraordinary++;
          break;
        case "Eggcelent":
          Eggcelent++;
          break;
        case "Eggspendable":
          Eggspendable++;
          break;
        default:
          break;
      }
    });

    // set state to be the counts
    setmintedRarities({
      Mythic,
      Leggendary,
      Eggotic,
      Eggceptional,
      Eggstraordinary,
      Eggcelent,
      Eggspendable,
    });
  };

  return (
    <>
      {showModalEdgyegg && <SelectedEdgyegg activeEdgyegg={activeEdgyegg} handleModalEdgyegg={handleModalEdgyegg} />}
      {/* {showModalRarity && <SelectedTrait handleChange={handleChange} traits={traits} />} */}
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
          {/* <div className="bottomContainer-trait">
            <form>
              <select onChange={handleChange}>
                {dataItems.map((items, index) => {
                  return (
                    <option value={index} key={index}>
                      {items}
                    </option>
                  );
                })}
              </select>
            </form>
          </div> */}
        </div>
      </div>
      <div className={`edgyeggimageShow ${edgyeggSearch.image ? "" : "hide"}`}>
        <div className="topContainer">
          <h2>That's a good looking Egg</h2>
        </div>
        <div className="imageBottomContainer-Edgyegg">
          <div className="edgyegg-image-container">
            <h2>Token ID:{edgyeggSearch.tokenId}</h2>
            <h2>{edgyeggSearch.name}</h2>
            <div>
              <div className="click" onClick={handleModalEdgyegg}>
                <img src={edgyeggSearch.image} alt="EdgyEgg NFT" />
                <p className="click">→ Click ←</p>
              </div>
            </div>
          </div>
          {/* <div className="traits-view">
            <div className="top">
              <h2>Traits</h2>
            </div>
            <div className="traits-Show">
              <img src={edgyeggSearch.image} alt="EdgyEgg NFT" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="edgyegg-rank">
        <div className="topContainer">
          <h2>Raritys</h2>
        </div>
        <div className="bottomContainer-edgyegg">
          <p>Mythic: {mintedRarities.Mythic}/6</p>
          <p>Leggendary: {mintedRarities.Leggendary}/80 </p>
          <p>Eggotic: {mintedRarities.Eggotic}/500 </p>
          <p>Eggceptional: {mintedRarities.Eggceptional}/900 </p>
          <p>Eggstraordinary: {mintedRarities.Eggstraordinary}/1600 </p>
          <p>Eggcellent: {mintedRarities.Eggcelent}/2500 </p>
          <p>Eggspendable: {mintedRarities.Eggspendable}/4400 </p>
        </div>
      </div>
    </>
  );
}
