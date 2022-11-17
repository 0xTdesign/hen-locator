import React from "react";
import "./FarmersMarket.css";
import { useEffect, useState } from "react";

export default function FarmersMarket({ setpageClass }) {
  // useEffect(() => {
  //   setpageClass("farmersmarket");
  // }, []);

  return (
    <div className="farmmarket">
      <div className="farm">
        <h1>Farmers Market 🌾</h1>
      </div>
    </div>
  );
}
