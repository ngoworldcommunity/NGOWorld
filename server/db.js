//This is a demo db , the original files are safe

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log('CONNECTED TO MONGO DB DATABASE 🌐');
  });
};

module.exports = connectToMongo;
