require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const routes = require("./routes/itemRoutes");
const passport = require("passport");
const session = require("express-session");

const app = express();
const port = process.env.port || 3001;
app.use(cors());
app.use(json());
routes(app);
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
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

massive(process.env.CONNECTION_STRING).then(dbinstance => {
	app.set("db", dbinstance);
});
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
	const db = app.get("db");
	db.getUserByAuthid([user.id])
		.then(response => {
			if (!response[0]) {
				db.addUserByAuthid([user.displayName, user.id, user.picture])
					.then(res => done(null, res[0]))
					.catch(console.log);
			} else return done(null, response[0]);
		})
		.catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);

app.get(
	"/login",
	passport.authenticate("auth0", {
		// successRedirect: "/",
		successRedirect: "http://localhost:3000/#/",
		// successRedirect: "/#/",
		failureRedirect: "/login"
	})
);

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

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
