const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RingSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  housechore: {
    type: Number,
    required: true
  },
  study: {
    type: Number,
    required: true
  },
  sleep: {
    type: Number,
    required: true
  }

});

module.exports = Ring = mongoose.model("ring", RingSchema);