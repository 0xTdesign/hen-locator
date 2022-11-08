import React from "react";
import "./Card.css";

export default function CardRoostr({ offersRoostr }) {
  return (
    <>
      <div className="entrys">
        {offersRoostr?.map((roostrObj, idx) => {
          return (
            <div key={idx} className="createdEntry">
              <div className="entryChikn">
                <div className="entryChiknImg">
                  <img src={roostrObj.image} alt="Chikn NFT" />
                </div>
                <div className="entryChiknData">
                  <p>
                    ID:
                    <br />
                    {roostrObj.tokenId}
                  </p>
                  <p>
                    <span className="card">Note:</span>
                    {roostrObj.note}
                  </p>
                  <p>
                    <span className="card">Avax:</span>
                    {roostrObj.price}
                  </p>
                  <p>
                    <span className="card">
                      <i className="fa-brands fa-discord"></i>/<i className="fa-brands fa-twitter"></i>:
                    </span>
                    {roostrObj.contact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
