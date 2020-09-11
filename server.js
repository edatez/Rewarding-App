require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const passport = require("passport");

require("./models");

app.use(passport.initialize());
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use( "/api", require("./routes/authController") );
// app.use( require("./routes/childController"))
app.use( "/api/activity", require("./routes/ActivitiesController") );
// app.use( "/api/reward", require("./routes/rewardController") );
app.use( "/api/children", require("./routes/ChildrenController"))

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/reward_app_database",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
