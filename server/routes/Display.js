//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const Club = require("../models/ClubsSchema");
const User = require("../models/UserSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//* Route 1  - Show all avaialble Users in the DB

//* Route 2 - Show all available Clubs in the DB

module.exports = router;
