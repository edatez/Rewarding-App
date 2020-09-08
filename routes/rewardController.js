//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");
// Routes
router.post("/", passport.authenticate('jwt', {session: false}), (req, res)=>{
  console.log("hit new route");
  User.create({
    name: req.user._id,
    email
  })
})

// router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
//   console.log("Create user Reward");
//   Reward.create({
//       user: req.user._id,
//       reward: req.body.reward, 
//       points: req.body.points
//     }).then(newReward => {
//       return res.status(200).json(newReward);
//     });
// });


// router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
//   console.log("Read user Reward");
//   Reward.find({ user: req.user._id}).then(results => {
//     if(results === null) {
//       results = [];
//     }

//     return res.status(200).json(results);
//   });
// });




// router.delete("/:reward", passport.authenticate('jwt', { session: false }), (req, res) => {
//   console.log("Delete Reward");
//   Reward.deleteOne({user: req.user._id, reward: req.params.reward}).then(() => {
//     res.end();
//   });
// });

// router.put("/", passport.authenticate('jwt', { session: false }), (req, res) => {
//   console.log("Update Reward");
//   Reward.where({
//       user: req.user._id,
//       reward: req.body.reward
//     }).
//     update({
//       points: req.body.points
//     }
//   ).then(result => {
//     if (result[0] === 0) {
//       console.log("No such reward.")
//       return res.status(404).json({error: "no reward with that name"});
//     } else {
//       console.log(result);
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;