const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const gameControl = require("../controllers/gameController");

console.log("API Routes running");
//signup functionality
// Endpoint: /api/signup
router.post("/signup", ({ body }, res) => {
	console.log("Signing up " + body.email);
	db.User.create(body)
		.then(dbUser => {
			console.log(dbUser);
			res.json(dbUser);
			db.UserStats.create(dbUser._id)
			.then(stats => {
				console.log(stats);
				console.log(dbUser._id);
				db.User.updateOne({_id: dbUser._id}, {$set:{userstats: stats._id}});
			})
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

// Route for checking login status on the client
// Endpoint: /api/user_data
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

// Route for finding tables with open seats
// Endpoint: /api/tables
router.get("/tables", function (req, res) {
	console.log("Getting all tables");
	db.Table.find({
		game_ended: {
			$eq: false
		},
		$or: [
			{
				user1:
				{
					$eq: "Open Seat"
				}
			},
			{
				user2:
				{
					$eq: "Open Seat"
				}
			},
			{
				user3:
				{
					$eq: "Open Seat"
				}
			},
			{
				user4:
				{
					$eq: "Open Seat"
				}
			},
			{
				user5:
				{
					$eq: "Open Seat"
				}
			}]
	}).then(function (results) {
		console.log("get tables returning data");
		return res.send(results);
	})
});

// Route for removing from the db tables that no longer have players
// Endpoint: /api/cleanup
router.post("/cleanup", function (req, res) {

	console.log("cleanup running");
	db.Table.find({
		user1: {
			$eq: "Open Seat"
		},
		user2: {
			$eq: "Open Seat"
		},
		user3: {
			$eq: "Open Seat"
		},
		user4: {
			$eq: "Open Seat"
		},
		user5: {
			$eq: "Open Seat"
		}
	})
		.then(function (results) {
			if (results != null) {
				for (i = 0; i < results.length; i++) {
					db.gaming_table.deleteOne({
						id: {
							$eq: results[i].id //might need to be _id
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

//create a new gaming table
//Endpoint: api/newtable
router.post("/newtable", function (req, res) {
	console.log("Creating a new table");

	db.Table.create({
		game: "Just Chatting",
		game_started: false,
		user1: req.user.email
	})
		.then(function (results) {
			console.log("sending new table data back")
			return res.json(results);
		})
		.catch(function (err) {
			return res.status(401).json(err);
		});
});

// Route for finding tables with open seats
// Endpoint: /api/table/
router.get("/table/:table", function (req, res) {
	console.log("Getting table data for ", req.params.table);
	db.Table.findById(req.params.table)
	.then(function (results) {
		console.log("Returning data for table ", req.params.table);
		return res.send(results);
	})
});

// Route for adding player to table with an open seat
// Endpoint: /api/table/
router.post("/table/:table", function (req, res) {
	console.log("Adding player to table ", req.params.table);
	let tableUpdateData = { $set: {} };
	tableUpdateData.$set[req.body.column] = req.body.data;
	console.log("update: ",tableUpdateData);
	db.Table.updateOne(
		{_id: req.params.table}, tableUpdateData)
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
});

// //get all running games for the setup page
// // Endpoint: /allgames
// router.get("/allgames", function (req, res) {
// 	db.Game.find({})
// 		.populate("players")
// 		.then(function (results) {
// 			console.log("get tables returning data");
// 			return res.send(results);
// 		})
// });

router.get("/UserStats", function (req, res) {
	console.log(req.user);
	db.User.findOne({
		email: req.user.email
	}).populate("userstats")
	.then(function (results) {
		console.log("get tables returning data", results);
		return res.send(results.email);
	})
});


module.exports = router;