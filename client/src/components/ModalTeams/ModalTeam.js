import React from "react";
import "./ModalTeams.css";
import { useEffect } from "react";

export default function ModalTeam({ changeModalWorldCupTeams, worldcupTeams, getCountryVotes }) {
  useEffect(() => {
    getCountryVotes();
  }, []);

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <div className="rules-tab">
            <p className="rule-title"></p>
            <div className="topContainer">
              <h2>Team Entries</h2>
            </div>
            <ul className="list">
              <li className="out">Qatar:{worldcupTeams.Qatar}</li>
              <li className="out">Ecuador:{worldcupTeams.Ecuador}</li>
              <li className="out">Senegal:{worldcupTeams.Senegal}</li>
              <li className="out">The Netherlands:{worldcupTeams.Netherlands}</li>
              <li>England:{worldcupTeams.England}</li>
              <li className="out">Iran:{worldcupTeams.Iran}</li>
              <li className="out">USA:{worldcupTeams.USA}</li>
              <li className="out">Wales:{worldcupTeams.Wales}</li>
              <li>Argentina:{worldcupTeams.Argentina}</li>
              <li className="out">Saudi Arabia:{worldcupTeams.SaudiArabia}</li>
              <li className="out">Mexico:{worldcupTeams.Mexico}</li>
              <li className="out">Poland:{worldcupTeams.Poland}</li>
              <li>France:{worldcupTeams.France}</li>
              <li className="out">Australia:{worldcupTeams.Australia}</li>
              <li className="out">Denmark:{worldcupTeams.Denmark}</li>
              <li className="out">Tunisia:{worldcupTeams.Tunisia}</li>
              <li className="out">Spain:{worldcupTeams.Spain}</li>
              <li className="out">Costa Rica:{worldcupTeams.CostaRica}</li>
              <li className="out">Germany:{worldcupTeams.Germany}</li>
              <li className="out">Japan:{worldcupTeams.Japan}</li>
              <li className="out">Belgium:{worldcupTeams.Belgium}</li>
              <li className="out">Canada:{worldcupTeams.Canada}</li>
              <li>Morocco:{worldcupTeams.Morocco}</li>
              <li>Croatia:{worldcupTeams.Croatia}</li>
              <li className="out">Brazil:{worldcupTeams.Brazil}</li>
              <li className="out">Serbia:{worldcupTeams.Serbia}</li>
              <li className="out">Switzerland:{worldcupTeams.Switzerland}</li>
              <li className="out">Cameroon:{worldcupTeams.Cameroon}</li>
              <li>Portugal:{worldcupTeams.Portugal}</li>
              <li className="out">Ghana:{worldcupTeams.Ghana}</li>
              <li className="out">Uruguay:{worldcupTeams.Uruguay}</li>
              <li className="out">Korea Republic:{worldcupTeams.KoreaRepublic}</li>
            </ul>
          </div>
          <p className="totalCount">Total:{worldcupTeams.total}</p>
          <br />
          <button className="modal__btn modalClose" onClick={changeModalWorldCupTeams}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
