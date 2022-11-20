import React from "react";
import "./Card.css";

export default function CardWorldCup({ worldCupEgg }) {
  return (
    <>
      {worldCupEgg?.map((edgyeggObj, idx) => {
        return (
          <div key={idx} className="createdEntry">
            <div className="entryChikn">
              Good Luck
              <div className="entryChiknImg">
                <img className="worldCupImg" src={edgyeggObj.image} alt="Chikn NFT" />
              </div>
              <div className="entryChiknData">
                <p>
                  <span className="card"> Mint Entry TokenId:</span>

                  {edgyeggObj.tokenId}
                </p>
                <p>
                  <span className="card">Country:</span>
                  {edgyeggObj.winningTeam}
                </p>
                {/* <p className="small">
                  <span className="card">Tx</span>
                  {edgyeggObj.note}
                </p> */}
                {/* <p>
                  <span className="card">
                    <i className="fa-brands fa-discord"></i>/<i className="fa-brands fa-twitter"></i>:
                  </span>
                  {edgyeggObj.discord}
                </p> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
