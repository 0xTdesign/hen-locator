const mongoose = require("mongoose");
require("dotenv").config();
const Chikn = require(".models/chikn");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Chikn.create({
    tokenId: "1234",
    note: "Test Note",
    price: "100",
    contact: "Contact",
  });
  console.log("Chikn");
}

seed();
