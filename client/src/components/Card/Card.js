import React from "react";
import "./Card.css";
import roosterNFT from "../../assets/roosterNFT.jpeg";

export default function Card() {
  return (
    <>
      <div className="entrys"></div>
      <div className="createdEntry">
        <div className="entryChikn">
          <div className="entryChiknImg">
            <img src={roosterNFT} alt="" />
          </div>
          <div className="entryChiknData">
            <p>
              <span className="card">ID:</span>123456
            </p>
            <p>
              <span className="card">Note:</span>123456789/123456
            </p>
            <p>
              <span className="card">Avax:</span>123456789/123456
            </p>
            <p>
              <span className="card">
                <i class="fa-brands fa-discord"></i>/<i class="fa-brands fa-twitter"></i>:
              </span>
              123456789/123
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
