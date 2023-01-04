var express = require("express");
var User = require("../models/user");
var router = express.Router();
var validator = require("email-validator");
const validatePhoneNumber = require("validate-phone-number-node-js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", function (req, res) {
  console.log("getting all users");
  User.find({}).exec(function (err, users) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(users);
      res.json(users);
    }
  });
});

router.get("/:id", function (req, res) {
  console.log("getting one user");
  User.findOne({
    _id: req.params.id,
  }).exec(function (err, user) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(user);
      res.json(user);
    }
  });
});

router.post("/register", async (req, res) => {
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

  if (email && password && confirm_password) {
    if (password === confirm_password && validator.validate(email)) {
      const user = await User.find({ email: email });
      if (user.length > 0)
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
});

router.put("/:id", function (req, res) {
  User.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
      },
    },
    {
      upsert: true,
    },
    function (err, newUser) {
      if (err) {
        res.send("error updating book");
      } else {
        console.log(newUser);
        res.send(newUser);
      }
    }
  );
});

router.delete("/:id", function (req, res) {
  User.findByIdAndRemove(
    {
      _id: req.params.id,
    },
    function (err, user) {
      if (err) {
        res.send("error deleting user");
      } else {
        console.log(user);
        res.send(user);
      }
    }
  );
});

module.exports = router;
