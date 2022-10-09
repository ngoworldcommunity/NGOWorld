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
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(data.password, 10);
    const UserData = User({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: hashpassword,
      address: data.address,
      pincode: data.pincode,
    });

    //saving the data to mongodb
    UserData.save();
    return res.status(201).json({ message: "Registration successful, please login" })
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" })
  }
});

//* Route 1a - User Update
router.post("/update", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body
		const existingUser = await User.findOne({ email: email, })
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" })
    }
		// User Exists in the database
		const validPassword = await bcrypt.compare(oldPassword, existingUser.password)
    
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" })
    }
		// Old Password Mathched
    if (newPassword.length < 5) {
      return res.status(406).json({ message: "Password Length must be greater than 5 characters" })
    }
    // Correct Password Length
    
		const newHashedPassword = await bcrypt.hash(newPassword, 10)
		// New Password Hashed
    
		// Updated User
		const UserData = {
      firstname: existingUser.firstname,
			lastname: existingUser.lastname,
			email: email,
			password: newHashedPassword,
			address: existingUser.address,
			pincode: existingUser.pincode,
		}
    
		await User.replaceOne({ email: email }, UserData)
		return res.status(201).json({ message: "Password Updated Successfully" })
	} catch (error) {
		// User Password Updated
    return res.status(500).json({ message: "Internal Server Error" })
	}
})

//* Route 2 - User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({email});
    
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" })
    }
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" })
    }

    const payload = { User: { id: existingUser.email } };
  
    jwt.sign(payload,process.env.JWT_SECRET, (err, token) => {
      return res.status(201).json({ token, isuser: true });
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
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
    return res.json({ success: true});
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//* Route 4  - Contact Us
router.post("/contactus", async (req, res) => {
  try {
		//insert the Sender's Data in database
		const data = req.body
		const email = data.email // Primary Key

		const SenderData = {
			firstname: data.firstName,
			lastname: data.lastName,
			email: email,
			message: data.message,
		}
		//saving the data to mongodb
		const existingContact = await ContactUs.findOne({ email })
		if (existingContact) {
			await ContactUs.replaceOne({ email: email }, SenderData)
		} else {
			const newContact = ContactUs(SenderData)
			newContact.save()
    }
    
		return res.status(201).json({ message: "Thank you for getting in touch!" })
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;



// ContactUs.find().then(
//   (data) => console.log(data)
// )
