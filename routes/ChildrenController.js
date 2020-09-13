//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");


//Using this route to make a child
router.post("/", passport.authenticate('jwt', { session: false }), (req, res)=>{

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

// to delete a child
router.delete("/:childID", passport.authenticate('jwt', {session:false}), (req,res)=>{

    User.findByIdAndUpdate(req.user._id, {
        $pull:{children:{_id: req.params.childID}}
    }).then((user)=>{
            res.send(user)
    })

})


//using this route to make a reward
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

// //to delete a reward
// router.delete("/:childID/:rewardID")

//using this route to redeem a reward
router.put("/:childID/:rewardID/redeem", passport.authenticate('jwt', {session: false}), (req, res)=>{
    User.findById(req.user._id)
    .then((user)=>{
        const redeemedVariable = user.children.id(req.params.childID).rewards.id(req.params.rewardID)
        redeemedVariable.redeemed = true
        user.save()
        .then(()=>{res.json(user)})
    })
})
  
//using this route to add points to a child
router.put("/:childID/points", passport.authenticate('jwt', {session:false}), (req, res)=>{

    User.findById(req.user._id)
    .then ((user)=>{
        const child = user.children.id(req.params.childID)
        child.pointsEarned = child.pointsEarned + req.body.additionalPoints
        user.save()
        .then(()=>{res.json(user)})
    })
});




module.exports = router;