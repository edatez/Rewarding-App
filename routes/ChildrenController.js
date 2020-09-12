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
            rewardName: req.body.reward,
            rewardPoints: req.body.points,
        });
        user.save()
        .then(()=>{res.json(user)})
    })
    
})


router.put("/:childID/:rewardID/redeem", passport.authenticate('jwt', {session: false}), (req, res)=>{
    User.findById(req.user._id)
    .then((user)=>{
        const redeemedVariable = user.children.id(req.params.childID).rewards.id(req.params.rewardID)
        redeemedVariable.redeemed = true
        user.save()
        .then(()=>{res.json(user)})
    })
})
  
// route for adding points
// (eda in progress)
router.post("/:childID/points", passport.authenticate('jwt', {session:false}), (req, res)=>{
    User.findById(req.user._id)
    .then ((user)=>{
        user.children.id(req.params.childID).pointsEarned.update({
            pointsEarned:pointsEarned+50,

        });
        user.save()
        .then(()=>{res.json(user)})
    })
});



module.exports = router;