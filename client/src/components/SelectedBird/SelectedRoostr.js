import React from "react";
import "./SelectedBird.css";

export default function SelectedRoostr({ activeRoostr, handleModalRoostr }) {
  console.log(activeRoostr.salePrice);
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <img title={activeRoostr.roostrId} src={activeRoostr.image} alt={activeRoostr.roostrId} />
          <div className="content">
            <h2>{activeRoostr.name}</h2>
            <p>KG:{activeRoostr.kg}</p>
            <p>Fert per day:{activeRoostr.fertPerDay}</p>
            <p>Rarity:{activeRoostr.rarity}</p>
            <p>Sale Price:{activeRoostr?.forSale ? activeRoostr?.salePrice : <p> Not for sale</p>}</p>
            <button className="modal__btn" onClick={handleModalRoostr}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
