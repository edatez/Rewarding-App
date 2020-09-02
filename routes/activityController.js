//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {Activity} = require("../models");
const passport = require("passport");
// Routes
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log("Read user Activity");
  Activity.find({ user: req.user._id}).then(results => {
    if(results === null) {
      results = [];
    }

    return res.status(200).json(results);
  });
});


router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log("Create user Activity");
  Activity.create({
      user: req.user._id,
      activity: req.body.activity, 
      points: req.body.points
    }).then(newActivity=> {
      return res.status(200).json(newActivity);
    });
});


router.delete("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log("Delete Activity");
  Activity.deleteOne({user: req.user._id, activity: req.body.activity}).then(() => {
    res.end();
  });
});

router.put("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log("Update Activity");
  Activity.where({
      user: req.user._id,
      activity: req.body.activity
    }).
    update({
      points: req.body.points
    }
  ).then(result => {
    if (result[0] === 0) {
      console.log("No such activity.")
      return res.status(404).json({error: "no activity with that name"});
    } else {
      console.log(result);
      res.status(200).end();
    }
  });
});

module.exports = router;
