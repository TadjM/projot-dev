// Comments

const localStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load User Model
require("../models/User");
//const User = mongoose.model("user");

module.exports = function(passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "email"
      },
      (email, password, done) => {
        console.log(email);
      }
    )
  );
};
