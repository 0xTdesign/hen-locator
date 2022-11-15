import React from "react";
import "./SelectedBird.css";

export default function SelectedEdgyegg({ activeEdgyegg, handleModalEdgyegg }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <div>
            <div className="dropdown">
              <button className="dropbtn">Traits</button>
              <div className="dropdown-content">
                {activeEdgyegg.attributes?.map((trait, idx) => {
                  return (
                    <div key={idx}>
                      <p>
                        {trait.trait_type}: {trait.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="tokenId">Token ID:{activeEdgyegg.tokenId}</p>
            <p className="tokenId">{activeEdgyegg.name}</p>
          </div>
          <img title={activeEdgyegg.name} src={activeEdgyegg.image} alt={activeEdgyegg.name} />
          <div className="content">
            <p>Rank:{activeEdgyegg.Rank}</p>
            <p>Rarity:{activeEdgyegg.Rarity}</p>

            {/* <h2>Score:{activeEdgyegg.Score}</h2> */}
            {/* <p>Sale Price:{activeEdgyegg.forSale ? activeEdgyegg.salePrice : <p> Not for sale</p>}</p> */}
            <button className="modal__btn" onClick={handleModalEdgyegg}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
