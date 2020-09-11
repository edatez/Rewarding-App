//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");



router.post("/", passport.authenticate('jwt', { session: false }), (req, res)=>{
    // console.log(req.user)
    // res.send("test");
    User.findByIdAndUpdate(req.user._id, {
        $push: {
            children:{
                childName: req.body.childName,
                pointsEarned: 0,
            }
        }
    }, {new: true})
    .then(
        (user)=>res.send(user)
    )
});

router.post("/:childID/rewards", passport.authenticate('jwt', { session: false }), (req, res)=>{
    User.findById(req.user._id)
    .then((user)=>{
        user.children.id(req.params.childID).rewards.push({
            rewardName: "test",
            rewardPoints: 100,
        });
        user.save()
        .then(()=>{res.json(user)})
    })
    
})

router.post("/:rewardID/redeem", passport.authenticate('jwt', {session: false}), (req, res)=>{
    Reward.findById(req.params.rewardID)
    .then((reward)=>{
        reward.redeemed= true
        reward.save()
        .then(()=>{res.json(reward)})
    })

})
  
module.exports = router;