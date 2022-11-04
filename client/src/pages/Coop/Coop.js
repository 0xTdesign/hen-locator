import React from "react";
import "./Coop.css";
import { useEffect } from "react";
import Card from "../../components/Card/Card";

export default function Coop({ setpageClass }) {
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
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
