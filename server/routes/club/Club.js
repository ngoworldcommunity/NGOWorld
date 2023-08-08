//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const Club = require("../../schema/club/ClubSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Events = require("../../schema/club/EventSchema");
var jwt = require("jsonwebtoken");

//* Route 1  - Club Registration

router.post("/register", async (req, res) => {
  try {
    const data = req.body;

    const { email } = req.body;
    const existingUser = await Club.findOne({ email: email });

    if (existingUser) {
      return res.status(409).json({ message: "Account already exists" });
    }

    const hashpassword = await bcrypt.hash(data.password, 10);

    const ClubData = Club({
      name: data.name,
      email: data.email,
      password: hashpassword,
      address: data.address,
      pincode: data.pincode,
      description: data.description,
      tagLine: data.tagLine,
    });

    await ClubData.save();
    res.status(201).json({ message: "Registration successful, please login" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//* ---------------------------------------------------------------------------------------------------------------------------------------------
//* Route 2 - Club Login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Club.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const payload = { Club: { id: existingUser.email } };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res
      .status(201)
      .cookie("Token", token, {
        sameSite: "none",
        httpOnly: true,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        secure: true,
      })
      .json({ token, isuser: false, message: "Logged you in !" });
  } catch (e) {
    res.status(500).json({ success: false });
  }
});

//* Route 3 - Create Event

router.post("/createevent", async (req, res) => {
  try {
    const { eventname, eventlocation, eventdate, eventdescription } = req.body;
    const eventData = Events({
      Eventname: eventname,
      Eventdate: eventdate,
      Eventlocation: eventlocation,
      Eventdescription: eventdescription,
    });
    await eventData.save();
    res.status(200).json(eventData);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
