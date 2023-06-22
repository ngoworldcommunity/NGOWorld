const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectToMongo();
const app = express();
let port = process.env.PORT || 5000;

// app.use(cors());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

const session = require("express-session");
const cookieParser = require("cookie-parser");

const passport = require("passport");
require("./config/passport-googleAuth-strategy");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    name: "ssid",

    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("HELLO FROM HOME");
});

//* user routes
app.use("/user", require("./routes/user/User"));

//* club routes
app.use("/club", require("./routes/club/Club"));

//* Display routes
app.use("/display", require("./routes/display/Display"));

//* Payment routes
app.use("/payment", require("./routes/payment/Payment"));

//* Product routes
app.use("/product", require("./routes/shop/Products"));

//* Google Auth routes
app.use("/auth", require("./routes/user/Auth"));

app.listen(port, () => console.log("API IS RUNNING 🚀 at port:", port));
