import React from "react";
import "./Rules.css";

export default function Rules({ changeModalWorldCup }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <div className="rules-tab">
            <p className="rule-title">Rules</p>
            <br />
            <h2 className="snap">
              There will be a <span className="snapRed">SNAPSHOT</span> taken to Check all entrys!
            </h2>
            <br />
            <ul>
              <li>⚽ 1 mint is 1 ticket. There is no cap on entrys.</li>
              <br />
              <li>⚽ All participants will be entered in a raffle draw for $500 USDC</li>
              <br />
              <li>
                ⚽ Paste your TokenId, select the country you think will win, paste your Tx hash and your Discord name.
              </li>
              <br />
              <li>
                ⚽ If your team gets knocked out, then you lose the chance to get the grand prize. But still have a chance in
                the raffle draw
              </li>
              <br />
              <li>
                ⚽ If your team makes it to the end or becomes 1st, 2nd or 3rd you will then be entered into a lucky draw
                between the others that also picked the same team.
              </li>
            </ul>
          </div>
          <br />
          <button className="modal__btn modalClose" onClick={changeModalWorldCup}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
