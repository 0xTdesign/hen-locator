import React from "react";
import "./FarmersMarket.css";
import { useEffect } from "react";
import Swap from "../../components/Swap/Swap";

export default function FarmersMarket({ setpageClass }) {
  // useEffect(() => {
  //   setpageClass("farmersmarket");
  // }, []);

  return (
    <div className="farmmarket">
      <div className="farm">
        <Swap />
      </div>
    </div>
  );
}
