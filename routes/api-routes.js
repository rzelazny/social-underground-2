const router = require("express").Router();
const db = require("../models");
var passport = require("../config/passport");

console.log("API Routes running");
//signup functionality
// Endpoint: /api/signup
router.post("/signup", ({ body }, res) => {
	console.log("Signing up " + body.email);
	db.User.create(body)
		.then(dbUser => {
			console.log(dbUser);
			res.json(dbUser);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//login functionality
// Endpoint: /api/login
router.post("/login", passport.authenticate("local"), function (req, res) {
	console.log("Loging in ", req.user.email);
	res.setHeader('content-type', 'text/plain');
	res.json(req.user);
});

//logout functionality
// Endpoint: /api/logout
router.get("/logout", function (req, res) {
	console.log("Logging out ", req);
	req.logout();
	res.redirect("/");
});

// // Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
	console.log("get api user data is running")
	if (!req.user) {
		// The user is not logged in, send back an empty object
		res.json({});
	} else {
		// Otherwise send back the user's email and id
		// Sending back a password, even a hashed password, isn't a good idea
		res.json({
			email: req.user.email,
			id: req.user.id
		});
	}
});

//post a new chat message
//Endpoint: api/chat
router.post("/chat", function (req, res) {
	console.log("post chat running ", req.body);
	db.ChatLog.create({
		user: req.user.email,
		message: req.body.message,
		table_id: req.body.table
	})
		.then(function (results) {
			console.log("sending new table data back")
			res.send(results);
		})
		.catch(function (err) {
			res.status(401).json(err);
		});
});

//find all existing game tables for the homepage
//Endpoint: api/tables
router.get("/tables", function (req, res) {
	db.gaming_table.findAll({
		where: {
			game_ended: {
				[Op.eq]: false
			},
			[Op.or]: [
				{
					user1:
					{
						[Op.eq]: "Open Seat"
					}
				},
				{
					user2:
					{
						[Op.eq]: "Open Seat"
					}
				},
				{
					user3:
					{
						[Op.eq]: "Open Seat"
					}
				},
				{
					user4:
					{
						[Op.eq]: "Open Seat"
					}
				},
				{
					user5:
					{
						[Op.eq]: "Open Seat"
					}
				}]
		},
	}).then(function (results) {
		console.log("get tables returning data");
		return res.send(results);
	})
});

//Remove empty tables before display them on the homepage
//Endpoint: api/cleanup
router.post("/cleanup", function (req, res) {

	console.log("cleanup running");
	db.gaming_table.findAll({
		where: {
			user1: {
				[Op.eq]: "Open Seat"
			},
			user2: {
				[Op.eq]: "Open Seat"
			},
			user3: {
				[Op.eq]: "Open Seat"
			},
			user4: {
				[Op.eq]: "Open Seat"
			},
			user5: {
				[Op.eq]: "Open Seat"
			}
		}
	})
		.then(function (results) {
			if (results != null) {
				for (i = 0; i < results.length; i++) {
					db.gaming_table.destroy({
						where: {
							id: {
								[Op.eq]: results[i].id
							}
						}
					})
					console.log("deleting empty table", results[i].id)
				}
				res.send(results);
			}
		})
		.catch(function (err) {
			res.status(401).json(err);
		});
});

module.exports = router;