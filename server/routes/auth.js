const express = require("express");
const router = express.Router();
const passport = require("passport");
const { googleAuth, googleAuthFail, googleAuthSuccess, googleLogout } = require('../controller/user/Auth');

//* Route 5  - google authentication
router.get("/google", googleAuth);

//* Route 6  - google authentication callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.successURL,
        failureRedirect: "/login/failed",
    }),
);

//* Route 7  - google authentication failed
router.get("/login/failed", googleAuthFail);

//* Route 8  - google authentication success
router.get("/login/success", googleAuthSuccess);

//* Route 9  - google authentication logout
router.get("/logout", googleLogout);

module.exports = router;
