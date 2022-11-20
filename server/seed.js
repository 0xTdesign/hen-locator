const mongoose = require("mongoose");
require("dotenv").config();
// const Chikn = require(".models/chikn");
// const Roostr = require(".models/roostr");
const EdgyEgg = require(".models/edgyegg");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // await Chikn.delete({
  //   tokenId: "",
  //   note: "",
  //   price: "",
  //   contact: "",
  // });
  // console.log("Chikn");

  // await Roostr.delete({
  //   tokenId: "",
  //   note: "",
  //   price: "",
  //   contact: "",
  // });
  // console.log("Chikn");

  await EdgyEgg.delete({
    tokenId: "",
    note: "",
    discord: "",
    winningTeam: "",
  });
  console.log("EdgyEgg");
}

seed();
