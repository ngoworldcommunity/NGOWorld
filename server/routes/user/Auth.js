const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
const passport = require("passport");

//* Route 5  - google authentication
router.get("/google", (req, res) => {
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";

  const params = new URLSearchParams({
    response_type: "code",
    redirect_uri: process.env.CALLBACK_URL,
    scope: "profile email ",
    client_id: process.env.CLIENT_ID,
  });

  const redirectURL = `${googleAuthURL}?${params}`;
  return res.json({ url: redirectURL });
});

//* Route 6  - google authentication callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "auth/login/failed",
  }),
  (req, res) => {
    res
      .cookie("isLoginInitiated", true, {
        expires: new Date(new Date().getTime() + 5 * 60 * 1000),
      })
      .redirect(process.env.successURL);
  },
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
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res
      .status(201)
      .cookie("Token", token, {
        sameSite: "strict",
        httpOnly: true,
        path: "/",
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
        secure: true,
      })
      .json({
        token,
        isuser: true,
        message: "Logged you in !",
      });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

//* Route 9  - google authentication logout
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.cookie("ssid", "", { expires: new Date(0), httpOnly: true });
    res.cookie("Token", "", { expires: new Date(0), httpOnly: true });
    res.status(201).redirect("/");
  });
});

module.exports = router;
