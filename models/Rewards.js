const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RewardSchema = new Schema({
    reward: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },
    redeemed: {
        type: Boolean,
        required: true
    }
});

module.exports = Reward = mongoose.model("reward", RewardSchema);