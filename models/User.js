const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  children:[{
    type: Schema.Types.ObjectId,
    ref: "Children"
  }],
  activities:[{
    type: Schema.Types.ObjectId,
    ref: "Activity"
  }]
});

module.exports = User = mongoose.model("users", UserSchema);