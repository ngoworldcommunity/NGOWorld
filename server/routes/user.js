//* All routes related to user's LOGIN AND REGISTER

const express = require("express");
const router = express.Router();
const { userRegister, userLogin, userPasswordUpdate, contactUs, userReport } = require('../controller/user/User');
//* Route 1  - User Registration
router.post("/register", userRegister);

//* Route 1a - User Update
router.post("/update", userPasswordUpdate);

router.post("/login", userLogin);

//* Route 3  - Report a Problem
router.post("/userreport", userReport);

//* Route 4  - Contact Us
router.post("/contactus", contactUs);

module.exports = router;
