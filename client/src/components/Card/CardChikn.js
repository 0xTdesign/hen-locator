import React from "react";
import "./Card.css";

export default function CardChikn({ offersChikn, deleteChikn }) {
  return (
    <>
      {offersChikn?.map((chiknObj, idx) => {
        console.log(chiknObj);
        return (
          <div key={idx} className="createdEntry">
            <div className="entryChikn">
              <div className="entryChiknImg">
                <img src={chiknObj.image} alt="Chikn NFT" />
              </div>
              <div className="entryChiknData">
                <p>
                  Chikn ID:
                  {chiknObj.chiknId}
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
                {/* <button className="delete-btn" onClick={() => deleteChikn(chiknObj)}>
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
