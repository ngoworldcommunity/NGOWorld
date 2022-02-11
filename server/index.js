const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

connectToMongo();
const app = express();
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("HELLO FROM HOME");
});

//* user routes
app.use("/user", require("./routes/User"));

//* club routes
app.use("/club", require("./routes/Clubs"));

//* Display routes
app.use("/display", require("./routes/Display"));

app.listen(port, () => {
  console.log("API IS RUNNING 🚀");
});
