const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:"users"
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
module.exports = Activity = mongoose.model("activity", ActivitySchema);