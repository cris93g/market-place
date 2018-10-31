require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const routes = require("./routes/itemRoutes");
const passport = require("passport");
const session = require("express-session");
//makes server
const app = express();
//makes port through process .env or locally on 3001
const port = process.env.port || 3001;
app.use(cors());
app.use(json());
//gets routes
routes(app);
//start of auth functionality
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
//creation of session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000
    }
  })
);
//middleware  between server and db
massive(process.env.CONNECTION_STRING).then(dbinstance => {
  app.set("db", dbinstance);
});
app.use(passport.initialize());
//auth uses session
app.use(passport.session());
passport.use(strat);
//gets user
passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        //gets info specified
        db.addUserByAuthid([user.displayName, user.id, user.picture])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);
app.get("/logout", logout);
//tells where to put user if they log in or fail to log in
app.get(
  "/login",
  passport.authenticate("auth0", {
    // successRedirect: "/",
    successRedirect: "http://localhost:3000/#/",
    // successRedirect: "/#/",
    failureRedirect: "/login"
  })
);
//stripe
app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});
//shows how server is currently doing if theres any issues
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
