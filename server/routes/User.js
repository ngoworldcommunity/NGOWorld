//* All routes related to user's LOGIN AND REGISTER

const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//* Route 1  - User Registration

//* Route 2 - User Login

//* Route 3 - Get user data via token

//* Route 4 - Edit user data

module.exports = router;
