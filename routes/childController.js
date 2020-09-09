//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {User} = require("../models");
const {Children} = require("../models/Children.js")
const passport = require("passport");
// Routes
router.post("/newChild", /*passport.authenticate('jwt', {session: false}),*/ (req, res)=>{
  console.log("hit new child route");
  //what do I need to add to ensure this is attributed to the correct user?
  Children.create({
      childName: req.body.childName,
      pointsEarned: 0
  })
  .then( newChild=>{
      return res.status(200).json(newChild)
  })
  
//   User.children.create({
//     childName: req.body.childName,
//     pointsEarned: 0,
//     // rewards:[]
//   })
//   .then( newChild=>{
//       return res.status(200).json(newChild);
//   });
});

module.exports = router;