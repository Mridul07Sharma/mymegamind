const mongoose = require("mongoose");

const Faculty_Schema = new mongoose.Schema(
  {
    email: {
      type: String,

      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },

    token: {
      type: String,
      default: "token",
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Faculty_Schema", Faculty_Schema);
