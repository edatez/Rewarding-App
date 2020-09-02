const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(    
    process.env.MONGODB_URI || "mongodb://localhost/reward_app_database",
);

const userSeed = [
    {
        name: "seedTest",
        email: "seed@test.com",
        password: "seedtest",
        children:{
            childName: "testChild",
            pointsEarned: 0,
            rewards: {
                rewardName: "testReward",
                rewardPoints: "testPoints",
                redeemed: false
            }
        },
        activies:{
            activity: "test",
            activityPoints: 0,
            completed: false
        }
    },
    {
        name: "2seedTest",
        email: "2seed@test.com",
        password: "2seedtest",
        children:{
            childName: "2testChild",
            pointsEarned: 0,
            rewards: {
                rewardName: "2testReward",
                rewardPoints: "2testPoints",
                redeemed: false
            }
        },
        activies:{
            activity: "2test",
            activityPoints: 0,
            completed: false
        }
    }
];

db.User
    .remove({})
    .then(()=> db.User.collection.insertMany(userSeed))
    .then(data =>{
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    });