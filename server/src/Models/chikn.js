const mongoose = require("mongoose");
const { Schema } = mongoose;

const chiknSchema = new Schema({
  image: String,
  tokenId: String,
  note: String,
  price: String,
  contact: String,
});

const Chikn = mongoose.model("chikn", chiknSchema);

module.exports = Chikn;
