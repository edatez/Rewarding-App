const express = require("express");
const router = express.Router();
const {User} = require("../models");
const passport = require("passport");

router.get("/", passport.authenticate('jwt', { session: false }), (req, res)=>{

    // console.log("hit user route")
    // let currentUser;

    User.findById(req.user._id)
        .then(user=>{
            res.json(user)
        })
        .catch(err =>{
            res.status(401).json(err);
        });
});

module.exports = router;