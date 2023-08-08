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

  return res
    .status(201)
    .cookie("isuser", req?.query?.isuser, {
      expires: new Date(new Date().getTime() + 5 * 60 * 1000),
      httpOnly: false,
      secure: true,
      sameSite: "none",
      domain: process.env.ORIGIN_DOMAIN,
    })
    .json({ url: redirectURL });
});

//* Route 6  - google authentication callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "auth/login/failed",
  }),
  (req, res) => {
    res
      .cookie("OAuthLoginInitiated", true, {
        expires: new Date(new Date().getTime() + 5 * 60 * 1000),
        httpOnly: false,
        secure: true,
        sameSite: "none",
        domain: process.env.ORIGIN_DOMAIN,
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
  console.log(req.user);
  if (req.user) {
    const data = { User: { id: req.user.email } };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    console.log("Token is:", token);

    res.cookie("Token", token, {
      sameSite: "none",
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      secure: true,
      domain: process.env.ORIGIN_DOMAIN,
    });

    res
      .status(201)
      .cookie("OAuthLoginInitiated", false, {
        expires: new Date(0),
        httpOnly: false,
        secure: true,
        sameSite: "none",
        domain: process.env.ORIGIN_DOMAIN,
      })
      .json({
        isuser: true,
        message: "Logged you in !",
      });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

//* Route 9  - google authentication logout
// router.post("/logout", function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }

//     console.log("Hello from Logout API");
//     res.status(201).json({ message: "Logged you out !" });
//   });
// });

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ message: "Error while logging out." });
    }

    res.cookie("Token", "", {
      expires: new Date(0),
      sameSite: "strict",
      httpOnly: true,
      domain: process.env.ORIGIN_DOMAIN,
      secure: true,
    });

    res.status(201).json({ message: "Logged you out !" });
  });
});

module.exports = router;
