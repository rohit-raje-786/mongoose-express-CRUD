const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Connected to MongoDB ");
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToMongo;
