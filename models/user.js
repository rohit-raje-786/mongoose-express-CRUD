var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone_number: {
      work: {
        type: String,
      },
      home: {
        type: String,
      },
      primary: {
        type: String,
      },
    },
    referred_by: {
      type: String,
      default: null,
    },
    roles: {
      type: Array,
      default: ["USER"],
    },
    source: {
      type: String,
      default: "website",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
