const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ChildrenSchema = new Schema({
    childName:{
        type: String,
        required: true
    },
    pointsEarned:[{
        type: Number,
        required: true
    }],
    rewards:[{
        rewardName: String,
        rewardValue: Number,
        redeemed: Boolean
    }]
})

module.exports = Children = mongoose.model("Children", ChildrenSchema);