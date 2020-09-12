const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require("ChildrenSchema")

const rewardsSubSchema = mongoose.Schema({
  rewardName: {
      type: String,
      required: true
  },
  rewardPoints:{
      type: Number,
      required: true
  },
  redeemed:{
      type: Boolean,
      default: false
  }
})

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  children: [new mongoose.Schema({
    childName:{
      type: String,
      required: true
    },
    pointsEarned:{
        type: Number,
        required: true
    },
    rewards:[rewardsSubSchema]
  })],

  activities:[new mongoose.Schema({
    activity:{
      type: String,
      required: true
    },
    activityPoints:{
      type: Number,
      required: true
    },
    completed:{
      type: Boolean,
      default: false
    }
  })]

});

module.exports = User = mongoose.model("users", UserSchema);