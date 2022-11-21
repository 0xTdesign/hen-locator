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
              <li>Qatar:{worldcupTeams.Qatar}</li>
              <li>Ecuador:{worldcupTeams.Ecuador}</li>
              <li>Senegal:{worldcupTeams.Senegal}</li>
              <li>The Netherlands:{worldcupTeams.Netherlands}</li>
              <li>England:{worldcupTeams.England}</li>
              <li>Iran:{worldcupTeams.Iran}</li>
              <li>USA:{worldcupTeams.USA}</li>
              <li>Wales:{worldcupTeams.Wales}</li>
              <li>Argentina:{worldcupTeams.Argentina}</li>
              <li>Saudi Arabia:{worldcupTeams.SaudiArabia}</li>
              <li>Mexico:{worldcupTeams.Mexico}</li>
              <li>Poland:{worldcupTeams.Poland}</li>
              <li>France:{worldcupTeams.France}</li>
              <li>Australia:{worldcupTeams.Australia}</li>
              <li>Denmark:{worldcupTeams.Denmark}</li>
              <li>Tunisia:{worldcupTeams.Tunisia}</li>
              <li>Spain:{worldcupTeams.Spain}</li>
              <li>Costa Rica:{worldcupTeams.CostaRica}</li>
              <li>Germany:{worldcupTeams.Germany}</li>
              <li>Japan:{worldcupTeams.Japan}</li>
              <li>Belgium:{worldcupTeams.Belgium}</li>
              <li>Canada:{worldcupTeams.Canada}</li>
              <li>Morocco:{worldcupTeams.Morocco}</li>
              <li>Croatia:{worldcupTeams.Croatia}</li>
              <li>Brazil:{worldcupTeams.Brazil}</li>
              <li>Serbia:{worldcupTeams.Serbia}</li>
              <li>Switzerland:{worldcupTeams.Switzerland}</li>
              <li>Cameroon:{worldcupTeams.Cameroon}</li>
              <li>Portugal:{worldcupTeams.Portugal}</li>
              <li>Ghana:{worldcupTeams.Ghana}</li>
              <li>Uruguay:{worldcupTeams.Uruguay}</li>
              <li>Korea Republic:{worldcupTeams.KoreaRepublic}</li>
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
