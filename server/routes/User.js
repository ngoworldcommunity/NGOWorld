//* All routes related to user's LOGIN AND REGISTER

const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const ReportProblem = require("../models/ReportProblemSchema");
const ContactUs = require("../models/ContactUsSchema");

//* Route 1  - User Registration
router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const { email } = req.body;
    let exists = await User.findOne({
      email,
    });
    if (exists) {
      return res.json({ exists: true });
    }
    const UserData = User({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      address: data.address,
      pincode: data.pincode,
    });

    //hashing the data
    const hashpassword = await bcrypt.hash(data.password, 10);
    UserData.password = hashpassword;
    //saving the data to mongodb
    UserData.save();
    return res.json({ success: true });
  } catch (e) {
    console.log(e);
  }
});
//* Route 1a - User Update
router.post("/update", async (req, res) => {
	try {
		const { email, oldPassword, newPassword } = req.body
		const exists = await User.findOne({
			email: email,
		})
		if (!exists) return res.json({ doesNotExist: true })
		// User Exists in the database

		const validPassword = await bcrypt.compare(oldPassword, exists.password)
		if (!validPassword) return res.json({ invalidPassword: true })
		// Old Password Mathched

		const newHashedPassword = await bcrypt.hash(newPassword, 10)
		// New Password Hashed

		// Updated User
		const UserData = {
			firstname: exists.firstname,
			lastname: exists.lastname,
			email: email,
			password: newHashedPassword,
			address: exists.address,
			pincode: exists.pincode,
		}

		await User.replaceOne({ email: email }, UserData)
		// User Password Updated
		return res.json({ success: true })
	} catch (error) {
		return res.json({ success: false })
	}
})

//* Route 2 - User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exists = await User.findOne({
      email,
    });
    const validPassword = await bcrypt.compare(password, exists.password);
    const payload = {
      User: {
        id: exists.email,
      },
    };
    if (validPassword) {
      jwt.sign(payload, "HELLOSECRET123", (err, token) => {
        return res.json({ status: true, token, isuser: true });
      });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ sucess: false });
  }
});

//* Route 3  - Report a Problem
router.post("/userreport", async (req, res) => {
  try {
    //fetch previous report from the same user
    const currentHour = new Date().getMinutes();
    const previousReports = await ReportProblem.find({ email: req.body.email }).exec();

    for (let i = 0; i < previousReports.length; i++) {
      let hourOfThisReport = new Date(previousReports[i].createdAt).getMinutes()
      //check if the user created a report in the last 2 hours
      if (hourOfThisReport >= currentHour - 120) {
        return res.json({
          success: false,
          message: "tryagain"
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
    ReportData.save();
    return res.json({ success: true, messsage: "" });
  } catch (e) {
    return res.json({ success: false, message: "failed" });
  }
});

//* Route 4  - Contact Us
router.post("/contactus", (req, res) => {
  try {    
    //insert the Sender's Data in database
    const data = req.body;

    const SenderData = ContactUs({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      message: data.message,
    });

    //saving the data to mongodb
    SenderData.save();
    return res.json({ success: true, messsage: "Thank you for getting in touch!" });
  } catch (e) {
    return res.json({ success: false, message: "Error!" });
  }
});

module.exports = router;
