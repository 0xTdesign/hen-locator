const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const bp = require("body-parser");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
require("dotenv").config();

const Chikn = require("./Models/chikn");
const Roostr = require("./Models/roostr");
const EdgyEgg = require("./Models/edgyegg");

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extend: true }));

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.DATABASE_URL);

app.get("/.netlify/functions/api", (req, res) => {
  res.json("HOME MA BRU");
});

// netlify/function/api

// Display Chikns
app.get("/.netlify/functions/api/chikn", async (req, res) => {
  try {
    const allChikns = await Chikn.find();
    res.status(200).json(allChikns);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get("/.netlify/functions/api/roostr", async (req, res) => {
  try {
    const allRoostrs = await Roostr.find();
    res.status(200).json(allRoostrs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Display EdgyEggs
app.get("/.netlify/functions/api/edgyegg", async (req, res) => {
  try {
    const allEdgyEgg = await EdgyEgg.find();
    res.status(200).json(allEdgyEgg);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create Chikn
app.post("/.netlify/functions/api/chikn", async (req, res) => {
  try {
    const newChikn = await Chikn.create(req.body);
    res.status(200).json(newChikn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create Roostr
app.post("/.netlify/functions/api/roostr", async (req, res) => {
  try {
    const newRoostr = await Roostr.create(req.body);
    res.status(200).json(newRoostr);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create EdgyEgg
app.post("/.netlify/functions/api/edgyegg", async (req, res) => {
  try {
    const newEdgyegg = await EdgyEgg.create(req.body);
    res.status(200).json(newEdgyegg);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update chikn

app.put("/.netlify/functions/api/chikn/:id"),
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

app.delete("/.netlify/functions/api/chikn/:id", async (req, res) => {
  try {
    const chiknToDelete = req.params.id;
    const deleteChikn = await Chikn.deleteOne({ _id: chiknToDelete });
    res.status(200).json(deleteChikn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.delete("/.netlify/functions/api/roostr/:id", async (req, res) => {
  try {
    const roostrToDelete = req.params.id;
    const deleteRoostr = await Roostr.deleteOne({ _id: roostrToDelete });
    res.status(200).json(deleteRoostr);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
