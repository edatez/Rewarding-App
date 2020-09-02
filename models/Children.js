const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//rewards subschema
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
        required: true
    }
})

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
    rewards:[rewardsSubSchema]
})

module.exports = Children = mongoose.model("Children", ChildrenSchema);