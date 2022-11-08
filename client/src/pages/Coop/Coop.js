import React from "react";
import "./Coop.css";
import { useEffect } from "react";
import CardChikn from "../../components/Card/CardChikn";
import CardRoostr from "../../components/Card/CardRoostr";

export default function Coop({ setpageClass, offersRoostr, offersChikn }) {
  useEffect(() => {
    setpageClass("coop");
  }, []);
  return (
    <>
      <div className="showAllCoop">
        <div className="topContainer">
          <h2>Hen Coop</h2>
        </div>
        <div className="bottomContainer">
          <div className="entrys">
            <CardChikn offersChikn={offersChikn} />
            <CardRoostr offersRoostr={offersRoostr} />
          </div>
        </div>
      </div>
    </>
  );
}
