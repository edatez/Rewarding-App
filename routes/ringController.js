//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {Ring} = require("../models");

// Routes
router.get("/", (req, res) => {
  console.log("Read user rings");
  Ring.find({ email: req.body.email}).then(rings => {
    if(rings === null) {
      rings = [];
    }

    return res.status(200).json(rings);
  });
});


router.post("/", (req, res) => {
  console.log("Create user ring");
    Ring.create({
      email: req.body.email, 
      activity: req.body.activity, 
      points: req.body.points
    }).then(newRing => {
      return res.status(200).json(newRing);
    });
});


router.delete("/", (req, res) => {
  console.log("Delete ring");
  Ring.deleteOne({email: req.body.email, activity: req.body.activity}).then(() => {
    res.end();
  });
});

router.put("/", (req, res) => {
  console.log("Update ring");
  Ring.where({
      email: req.body.email,
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
