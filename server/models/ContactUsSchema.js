const mongoose = require("mongoose");

const ContactUsScema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contactus", ContactUsScema);
