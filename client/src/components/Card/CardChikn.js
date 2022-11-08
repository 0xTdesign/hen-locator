import React from "react";
import "./Card.css";

export default function CardChikn({ allBirds, chiknSearch }) {
  return (
    <>
      <div className="entrys"></div>
      <div className="createdEntry">
        <div className="entryChikn">
          <div className="entryChiknImg">
            <img src={chiknSearch.image} alt="Chikn NFT" />
          </div>
          <div className="entryChiknData">
            <p>
              <span className="card">ID:</span>123456
            </p>
            {allBirds.map((chiknObj, idx) => {
              return (
                <div>
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
                      <i class="fa-brands fa-discord"></i>/<i class="fa-brands fa-twitter"></i>:
                    </span>
                    {chiknObj.contact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
