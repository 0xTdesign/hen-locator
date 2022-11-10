import React from "react";
import "./SelectedBird.css";

export default function SelectedChikn({ activeChikn, handleModalChikn }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <img title={activeChikn.chiknId} src={activeChikn.image} alt={activeChikn.chiknId} />
          <div className="content">
            <h2>{activeChikn.name}</h2>
            <p>KG:{activeChikn.kg}</p>
            <p>Rarity:{activeChikn.rarity}</p>
            <p>Sale Price:{activeChikn.salePrice ? "" : <p> Not for sale</p>}</p>
            <button className="modal__btn" onClick={handleModalChikn}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
