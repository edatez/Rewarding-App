const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RingSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  }
});
module.exports = Ring = mongoose.model("ring", RingSchema);