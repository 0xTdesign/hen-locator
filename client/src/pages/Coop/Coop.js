import React from "react";
import "./Coop.css";
import { useEffect } from "react";
import CardChikn from "../../components/Card/CardChikn";
import CardRoostr from "../../components/Card/CardRoostr";

export default function Coop({ setpageClass, offersRoostr, offersChikn, deleteRoostr, deleteChikn }) {
  // useEffect(() => {
  //   setpageClass("coop");
  // }, []);
  return (
    <>
      <div className="showAllCoop">
        <div className="topContainer">
          <h2>Hen Coop</h2>
        </div>
        <div className="bottomContainer-coop">
          <div className="entrys">
            <div className="bird-container">
              <CardChikn offersChikn={offersChikn} deleteChikn={deleteChikn} />
              <CardRoostr offersRoostr={offersRoostr} deleteRoostr={deleteRoostr} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
