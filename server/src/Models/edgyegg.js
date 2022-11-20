const mongoose = require("mongoose");
const { Schema } = mongoose;

const edgyeggSchema = new Schema({
  image: String,
  tokenId: String,
  note: String,
  winningTeam: String,
  discord: String,
});

const EdgyEgg = mongoose.model("edgyegg", edgyeggSchema);

module.exports = EdgyEgg;
