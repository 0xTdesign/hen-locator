const mongoose = require("mongoose");
const { Schema } = mongoose;

const roostrSchema = new Schema({
  tokenId: String,
  note: String,
  price: String,
  contact: String,
});

const Roostr = mongoose.model("roostr", roostrSchema);

module.exports = Roostr;
