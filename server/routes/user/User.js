//* All routes related to user's LOGIN AND REGISTER

const express = require("express");
const User = require("../../schema/user/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const ReportProblem = require("../../schema/user/ReportProblemSchema");
const ContactUs = require("../../schema/user/ContactUsSchema");
const {userRegisterSchema, userPasswordUpdateSchema, userLoginSchema, userReportSchema, userContactSchema} = require('../../validation/user');

//* Route 1  - User Registration
router.post("/register", async (req, res) => {
  try {
    const payload = await userRegisterSchema.validateAsync(req.body);
    const { email, ...data } = payload
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
    res.status(500).json({ message: e.message });
  }
});

//* Route 1a - User Update
router.post("/update", async (req, res) => {
  try {
    const payload = await userPasswordUpdateSchema.validateAsync(req.body);
    const { email, oldPassword, newPassword } = payload
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
    res.status(500).json({ message: error.message });
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
    const payload = await userLoginSchema.validateAsync(req.body);
    const { email, password } = payload
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const jwtPayload = { User: { id: existingUser.email } };

    jwt.sign(jwtPayload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw new Error("Something Went Wrong!");
      res.status(201).json({ token, isuser: true });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//* Route 3  - Report a Problem
router.post("/userreport", async (req, res) => {
  try {
    const payload = await userReportSchema.validateAsync(req.body);
    const currentHour = new Date().getMinutes();
    const previousReports = await ReportProblem.find({
      email: req.body.email,
    }).exec();

    for (let i = 0; i < previousReports.length; i++) {
      let hourOfThisReport = new Date(
        previousReports[i].createdAt,
      ).getMinutes();

      if (hourOfThisReport >= currentHour - 120) {
        return res.json({
          success: false,
          message: "tryagain",
        });
      }
    }

    const data = payload;

    const ReportData = ReportProblem({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      reportmessage: data.reportmessage,
    });

    await ReportData.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//* Route 4  - Contact Us
router.post("/contactus", async (req, res) => {
  try {
    const payload = await userContactSchema.validateAsync(req.body);
    const data = payload;
    const email = data.email;

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
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
