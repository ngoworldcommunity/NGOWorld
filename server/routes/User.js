//* All routes related to user's LOGIN AND REGISTER

const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const ReportProblem = require("../models/ReportProblemSchema");
const ContactUs = require("../models/ContactUsSchema");
const passport = require("passport");

//* Route 1  - User Registration
router.post("/register", async (req, res) => {
  try {
    const { email, ...data } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      ...data,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "Registration successful, please login" });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//* Route 1a - User Update
router.post("/update", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // User Exists in the database
    const validPassword = await bcrypt.compare(
      oldPassword,
      existingUser.password,
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    // Old Password Mathched
    if (newPassword.length < 5) {
      return res
        .status(406)
        .json({ message: "Password Length must be greater than 5 characters" });
    }
    // Correct Password Length

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    // New Password Hashed

    // Updated User
    const UserData = {
      firstname: existingUser.firstname,
      lastname: existingUser.lastname,
      email: email,
      password: newHashedPassword,
      address: existingUser.address,
      pincode: existingUser.pincode,
    };

    await User.replaceOne({ email: email }, UserData);
    res.status(201).json({ message: "Password Updated Successfully" });
  } catch (error) {
    // User Password Updated
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * @description Login User
 * @route POST /user/login
 * @access Public
 * @requires email,password
 * @returns token (string) and isuser (boolean)
 */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const payload = { User: { id: existingUser.email } };

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw new Error("Something Went Wrong!");
      res.status(201).json({ token, isuser: true });
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//* Route 3  - Report a Problem
router.post("/userreport", async (req, res) => {
  try {
    //fetch previous report from the same user
    const currentHour = new Date().getMinutes();
    const previousReports = await ReportProblem.find({
      email: req.body.email,
    }).exec();

    for (let i = 0; i < previousReports.length; i++) {
      let hourOfThisReport = new Date(
        previousReports[i].createdAt,
      ).getMinutes();
      //check if the user created a report in the last 2 hours
      if (hourOfThisReport >= currentHour - 120) {
        return res.json({
          success: false,
          message: "tryagain",
        });
      }
    }
    //else begin to insert the request in database
    const data = req.body;

    const ReportData = ReportProblem({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      reportmessage: data.reportmessage,
    });

    //saving the data to mongodb
    await ReportData.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//* Route 4  - Contact Us
router.post("/contactus", async (req, res) => {
  try {
    //insert the Sender's Data in database
    const data = req.body;
    const email = data.email; // Primary Key

    const SenderData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: email,
      message: data.message,
    };
    //saving the data to mongodb
    const existingContact = await ContactUs.findOne({ email });
    if (existingContact) {
      await ContactUs.replaceOne({ email: email }, SenderData);
    } else {
      const newContact = ContactUs(SenderData);
      await newContact.save();
    }

    res.status(201).json({ message: "Thank you for getting in touch!" });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//* Route 5  - google authentication
router.get("/google", (req, res) => {
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";

  const params = new URLSearchParams({
    response_type: "code",
    redirect_uri: process.env.CALLBACK_URL, // Replace with your redirect URI
    scope: "profile email ",
    client_id: process.env.CLIENT_ID, // Replace with your client ID
  });

  const redirectURL = `${googleAuthURL}?${params}`;
  res.redirect(redirectURL);
  // res.json({ url: redirectURL });
});

//* Route 6  - google authentication callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.successURL,
    failureRedirect: "/login/failed",
  }),
);

//* Route 7  - google authentication failed
router.get("/login/failed", (req, res) => {
  res
    .status(401)
    .json({ error: true, message: "User failed to authenticate." });
});

//* Route 8  - google authentication success
router.get("/login/success", (req, res) => {
  if (req.user) {
    const data = { User: { id: req.user.email } };

    res.status(200).json({
      success: true,
      error: false,
      message: "Successfully Loged In",
      user: req.user,
      accessToken: jwt.sign(data, process.env.JWT_SECRET),
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

//* Route 9  - google authentication logout
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ success: true });
  });
});

module.exports = router;
