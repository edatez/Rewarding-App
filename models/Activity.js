const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
  activity: {
    type: String,
    required: true
  },
  activityPoints: {
    type: Number,
    required: true
  },
  completed:{
    type: Boolean,
    required: true
  }
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);