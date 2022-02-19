//This is a demo db , the original files are safe

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://tamaldas69:tamaldas69@cluster0.g1f0o.mongodb.net/milandatabase?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("CONNECTED TO MONGO DB DATABASE 🌐");
  });
};

module.exports = connectToMongo;
