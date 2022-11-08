("use strict");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const bp = require("body-parser");
require("dotenv").config();

const Chikn = require("./Models/chikn");
const Roostr = require("./Models/roostr");

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extend: true }));

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.json("HOME MA BRU");
});

// netlify/function/api

// Display Chikns
app.get("/chikn", async (req, res) => {
  try {
    const allChikns = await Chikn.find();
    res.status(200).json(allChikns);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get("/roostr", async (req, res) => {
  try {
    const allRoostrs = await Roostr.find();
    res.status(200).json(allRoostrs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create Chikn
app.post("/chikn/:id", async (req, res) => {
  try {
    const API = `https://api.chikn.farm/api/chikn/metadata/${req.params.id}`;
    const res = await axios.get(API);
    const newChikn = await Chikn.create({ ...req.body, image: res.data.image });
    res.status(200).json(newChikn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create Roostr
app.post("/roostr/:id", async (req, res) => {
  try {
    const API = `https://api.chikn.farm/api/roostr/metadata/${req.params.id}`;
    const res = await axios.get(API);
    const newRoostr = await Roostr.create({ ...req.body, image: res.data.image });
    res.status(200).json(newRoostr);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update chikn

app.put("chikn/:id"),
  async (req, res) => {
    try {
      const chiknToUpdate = req.params.id;
      const updatedChikn = await Chikn.updateOne({ _id: chiknToUpdate }, req.body);
      res.status(200).json(updatedChikn);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

//Deleted Chikn

app.delete("/chikn/:id", async (req, res) => {
  try {
    const chiknToDelete = req.params.id;
    const deleteChikn = await Chikn.deleteOne({ _id: chiknToDelete });
    res.status(200).json(deleteChikn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

// module.exports.handler = serverless(app);

// const handler = serverless(app);

// module.exports.handler = async (event, context) => {
//   const result = await this.handler(event, context);
//   return result;
// };
