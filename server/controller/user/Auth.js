var jwt = require("jsonwebtoken");

//* Controller 5  - google authentication
const googleAuth = async (req, res) => {
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";

  const params = new URLSearchParams({
    response_type: "code",
    redirect_uri: process.env.CALLBACK_URL,
    scope: "profile email ",
    client_id: process.env.CLIENT_ID,
  });

  const redirectURL = `${googleAuthURL}?${params}`;
  res.redirect(redirectURL);
};

//* Controller 6  - google authentication failed
const googleAuthFail = async (req, res) => {
  res
    .status(401)
    .json({ error: true, message: "User failed to authenticate." });
};

//* Controller 7  - google authentication success
const googleAuthSuccess = async (req, res) => {
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
};

//* Controller 8  - google authentication logout
const googleLogout = async (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ success: true });
  });
};

module.exports = {
  googleAuth,
  googleAuthFail,
  googleAuthSuccess,
  googleLogout
};
