const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const crypto = require("crypto");
const User = require("../schema/user/UserSchema");

passport.use(
  new googleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user,
      ) {
        if (err) {
          return;
        }

        if (user) {
          return done(null, user);
        } else {
          let firstname = profile.displayName.split(" ")[0];
          let lastname = profile.displayName.split(" ")[1];

          if (!lastname) lastname = " ";

          User.create(
            {
              firstname: firstname,
              lastname: lastname,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString("hex"),
            },
            function (err, user) {
              if (err) {
                return;
              }
              return done(null, user);
            },
          );
        }
      });
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserializing the user the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      return done(null, user);
    }
    return done(null, user);
  });
});

module.exports = passport;
