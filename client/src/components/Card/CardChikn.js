import React from "react";
import "./Card.css";

export default function CardChikn({ offersChikn }) {
  return (
    <>
      <div className="entrys">
        {offersChikn?.map((chiknObj, idx) => {
          return (
            <div key={idx} className="createdEntry">
              <div className="entryChikn">
                <div className="entryChiknImg">
                  <img src={chiknObj.image} alt="Chikn NFT" />
                </div>
                <div className="entryChiknData">
                  <p>
                    ID:
                    <br />
                    {chiknObj.tokenId}
                  </p>
                  <p>
                    <span className="card">Note:</span>
                    {chiknObj.note}
                  </p>
                  <p>
                    <span className="card">Avax:</span>
                    {chiknObj.price}
                  </p>
                  <p>
                    <span className="card">
                      <i className="fa-brands fa-discord"></i>/<i className="fa-brands fa-twitter"></i>:
                    </span>
                    {chiknObj.contact}
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
