import React from "react";
import "./Traits.css";
import { useEffect, useState } from "react";
import rarityBreakdownJson from "../../rarityBreakdown.json";

export default function Traits({ setpageClass }) {
  useEffect(() => {
    setpageClass("traits");
  }, []);

  const [showModalRarity, setshowModalRarity] = useState(false);

  const [traits, setTraits] = useState([]);

  const dataItems = [
    "Background",
    "Shell",
    "Shell Extras",
    "Waist",
    "Hand Right",
    "Neck",
    "Head",
    "Hand Left",
    "Eyes",
    "Eye gear",
    "Mouth",
    "Yolk Type",
  ];

  const handleChange = (e) => {
    const req = e.target.value;
    setshowModalRarity(!showModalRarity);
    console.log(rarityBreakdownJson[req][dataItems[req]]);
    setTraits([...rarityBreakdownJson[req][dataItems[req]]]);
  };
  return (
    <>
      <div className="showTrait">
        <div className="topContainer">
          <h2>Trait selector</h2>
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
        </div>
        <div className="trait">
          {traits.map((items, index) => {
            return (
              <div key={index}>
                <span className="item">
                  {items.trait}:{items.occurrence}
                </span>
                {/* <p>Count : {items.count}</p> */}
                {/* <p>Occurence : {items.occurrence}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
