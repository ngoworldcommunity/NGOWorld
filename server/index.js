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

//* club routes
// app.use("/club", require("./routes/PriestAuth"));

//* Display all
// app.use("/displayall", require("./routes/Display"));

//* user routes
// app.use("/user", require("./routes/UserAuth"));

//* TEST ROUTE
//* You can simply call /testdisplay and get the list of all Users from the Database.
//* This is made for testing purposes so that we can check connectivity of DB

// app.get("/testdisplay", async (req, res) => {
//   let testusers = await User.find({});
//   res.json(testusers);
// });

app.listen(port, () => {
  console.log("API IS RUNNING 🚀");
});
