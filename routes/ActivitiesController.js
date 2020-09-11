const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");

router.post("/", passport.authenticate('jwt', {session: false}), (req, res)=>{

    console.log(req.user._id)
    User.findByIdAndUpdate(req.user._id,{
        $push:{
            activities:{
                activity: "activityTest",
                activityPoints: 100,
            }
        }
    }, {new: true})
    .then(
        (user)=>res.send(user)
    )
});

module.exports = router