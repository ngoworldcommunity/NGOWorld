require('dotenv').config();
//This is a demo db , the original files are safe

const mongoose = require("mongoose");
const connectToMongo = () => {
  console.log("env uri:", process.env.MONGO_URI)
  mongoose.connect("mongodb+srv://roei:KkuWjOaQddYsGcRz@cluster0.3z4rusl.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("CONNECTED TO MONGO DB DATABASE 🌐");
  });
};

module.exports = connectToMongo;
