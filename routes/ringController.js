//Require Dependencies/Models
const express = require("express");
const router = express.Router();
const {Ring} = require("../models");

// Routes
router.get("/", (req, res) => {
  console.log("Read user ring");
  Ring.findOne({ email: req.body.email}).then(ring => {
    if(ring === null) {
      console.log("No user ring. Create it.")
      Ring.create({ email: req.body.email, housechore: 0, study: 0, sleep: 0}).then(newRing => {
        return res.status(200).json(newRing);
      });
    }
    else {
      return res.status(200).json(ring);
    }
  });
});


router.post("/", (req, res) => {
  console.log("Create user ring");
  Ring.findOne({ email: req.body.email}).then(ring => {
    if(ring === null) {
      Ring.create({
        email: req.body.email, 
        housechore: req.body.housechore, 
        study: req.body.study,
        sleep: req.body.sleep
      }).then(newRing => {
        return res.status(200).json(newRing);
      });
    }
    else {
      console.log("Error - User already has a ring")
      return res.status(400).json({error: "user already has a ring"});
    }
  });
});


router.delete("/", (req, res) => {
  console.log("Delete ring");
  Ring.deleteOne({email: req.body.email}).then(() => {
    res.end();
  });
});

router.put("/", (req, res) => {
  console.log("Update ring");
  Ring.where({
      email: req.body.email
    }).
    update(
    {
      housechore: req.body.housechore,
      study: req.body.study,
      sleep: req.body.sleep
    }
  ).then(result => {
    if (result[0] === 0) {
      console.log("No user ring. Create it with the updated values.")
      Ring.create({
        email: req.body.email,
        housechore: req.body.housechore,
        study: req.body.study,
        sleep: req.body.sleep
      }).then(newRing => {
        return res.status(200).json(newRing);
      });
    } else {
      console.log(result);
      res.status(200).end();
    }
  });
});

module.exports = router;
