//WILL REMOVE ONCE SCHEMA IS COMPLETE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RewardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:"users"
  },
  reward: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  }
});
module.exports = Reward = mongoose.model("reward", RewardSchema);