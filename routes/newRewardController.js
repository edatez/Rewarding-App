//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");
// Routes
router.post("/", passport.authenticate('jwt', {session: false}), (req, res)=>{
  console.log("hit new reward route");
  //what do I need to add to ensure this is attributed to the correct User & the correct Child?
  User.children.rewards.create({
    rewardName: req.body.rewardName,
    rewardPoints: req.body.rewardPoints,
    redeemed: false
  })
  .then( newReward=>{
      return res.status(200).json(newReward);
  });
});

module.exports = router;