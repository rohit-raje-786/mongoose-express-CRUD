var express = require("express");
var router = express.Router();
var validator = require("email-validator");
const validatePhoneNumber = require("validate-phone-number-node-js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      confirm_password,
      phone_number,
      referred_by,
      roles,
      source,
    } = req.body;
    // check wether confirm password exists or not
    if (email && password && confirm_password) {
      if (password === confirm_password && validator.validate(email)) {
        const user = await User.findOne({ email: email });
        if (!user)
          return res.status(200).json({ msg: "User already registered" });
        if (!validatePhoneNumber.validate(phone_number.primary))
          return res.status(400).json({ msg: "Invalid phone number" });
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        var newUser = new User({
          username: username,
          email: email,
          password: hash,
          phone_number: phone_number,
          referred_by: referred_by,
          roles: roles,
          source: source,
        });
        newUser.save(function (err, user) {
          if (err) {
            console.log(err);
            res.status(500).json({ msg: "error saving user" });
          } else {
            console.log(user);
            res.status(201).send(user);
          }
        });
      } else {
        res.status(400).json({
          msg: "Password and Confirm Password Doesn't match",
        });
      }
    } else {
      res.status(400).json({
        msg: "Invalid Request",
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
