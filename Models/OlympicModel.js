const mongoose = require("mongoose");

const OlympicData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100",
  },
});

const olympicdata = mongoose.model("olympicdata", OlympicData);
module.exports = olympicdata;
