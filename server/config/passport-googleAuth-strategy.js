const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const crypto = require("crypto");
const User = require("../schema/user/UserSchema");

passport.use(
  /* This code is creating a new instance of the Google OAuth2 authentication strategy for Passport.js.
  It takes in the client ID, client secret, and callback URL as options. These options are used to
  authenticate the user with Google and redirect them back to the application after authentication
  is complete. */
  new googleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      // find the use
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user,
      ) {
        if (err) {
          console.log("error in google-strategy-passport", err);
          return;
        }
        /* This code block is checking if a user with the email address obtained from the Google OAuth2
        authentication already exists in the database. If the user exists, it returns the user
        object using the `done` callback function. If the user does not exist, it creates a new user
        in the database using the `User.create` method and sets it as the authenticated user using
        the `done` callback function. */
        if (user) {
          return done(null, user);
        } else {
          // if not found, create the use and set it as req.user
          let firstname = profile.displayName.split(" ")[0];
          let lastname = profile.displayName.split(" ")[1];
          // const userAddress = addressProfile.data.addresses[0]?.formattedValue;
          // const userPincode = addressProfile.data.addresses[0]?.postalCode;
          User.create(
            {
              firstname: firstname,
              lastname: lastname,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString("hex"),
            },
            function (err, user) {
              if (err) {
                console.log(
                  "error in creating user google-strategy-passport",
                  err,
                );
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

/* `passport.serializeUser` is a method provided by Passport.js that is used to serialize the user
object and store it in the session. This method takes a callback function that accepts two
arguments: the user object and a callback function called `done`. The `done` function is used to
indicate that the serialization process is complete. */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserializing the user the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error in finding user");
      return done(null, user);
    }
    return done(null, user);
  });
});

module.exports = passport;
