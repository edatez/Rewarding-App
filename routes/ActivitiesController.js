const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");



//this controller is adding an activity to the user that is logged in, use it to add activities to the current user
router.post("/", passport.authenticate('jwt', {session: false}), (req, res)=>{

    console.log(req.user._id)
    User.findByIdAndUpdate(req.user._id,{
        $push:{
            activities:{
                activity: req.body.activity,
                activityPoints: req.body.points,
            }
        }
    }, {new: true})
    .then(
        (user)=>res.send(user)
    )
});

module.exports = router