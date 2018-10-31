const Auth0Strategy = require("passport-auth0");
//gets all needed info from .env file
const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

//makes object with needed fields
const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    callbackURL: "/login",
    scope: "openid profile"
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
  }
);
//function that gets user
const getUser = (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(403).json({ message: "Not Logged In" });
};
//function that logs user out
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
    // res.redirect("/#/");
  });
};
//export functions
module.exports = {
  strat,
  getUser,
  logout
};
