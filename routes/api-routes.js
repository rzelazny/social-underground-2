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
			// db.UserStats.create(dbUser._id)
			// .then(stats => {
			// 	console.log(stats);
			// 	console.log(dbUser._id);
			// 	db.User.updateOne({_id: dbUser._id}, {$set:{userstats: stats._id}});
			// })
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
	console.log("Logging out ", req.user);
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


// Route for finding tables with open seats
// Endpoint: /api/alltables
router.get("/alltables", function (req, res) {
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
			console.log("cleanup results:", results);
			if (results != null) {
				for (let i = 0; i < results.length; i++) {
					db.Table.deleteOne({
						_id : results[i]._id   
					}) //"ObjectId(\"" + + "\")"
					.catch((err) => console.log(err))
					console.log("deleting empty table", results[i]._id)
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

// updating the table name to single player blackjack
//Endpoint: api/blackjack/:id
router.post("/blackjack/:id", function (req, res) {
	db.Table.updateOne(
		{_id: req.params.id}, {
			game: "Blackjack"
		})
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
	.catch(function (err) {
		return res.status(401).json(err);
	});
})

// updating the table name to rps
//Endpoint: api/rps/:id
router.post("/rps/:id", function (req, res) {
	db.Table.updateOne(
		{_id: req.params.id}, {
			game: "Rock Paper Scissors"
		})
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
	.catch(function (err) {
		return res.status(401).json(err);
	});
})

// updating the table name to werewolf
//Endpoint: api/werewolf/:id
router.post("/beast/:id", function (req, res) {
	db.Table.updateOne(
		{_id: req.params.id}, {
			game: "Beast"
		})
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
	.catch(function (err) {
		return res.status(401).json(err);
	});
})


// Route for finding a player's seat at the table
// Endpoint: /api/myseat/
router.get("/myseat/:table", function (req, res) {
	console.log("Getting the seat for ", req.user.email);
	db.Table.findById(req.params.table)
	.then(function (results) {
		console.log("Returning seat for ", req.user.email);
		console.log("results", results);
		let seat = 0;
		if(results.user1 === req.user.email){
			seat = 1;
		}else if(results.user2 === req.user.email){
			seat = 2;
		}else if(results.user3 === req.user.email){
			seat = 3;
		}else if(results.user4 === req.user.email){
			seat = 4;
		}else if(results.user5 === req.user.email){
			seat = 5;
		}
		return res.json(seat);
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
	})
	.then(function (results) {
		console.log("get tables returning data", results);
		return res.send(results);
	})
});

router.post("/UserStats", function (req, res) {
	console.log(req.user);
	let tableUpdateData = { $set: {} };
	console.log(req.body);
	tableUpdateData.$set["blackjack_win"] = req.body.player1Score;
	console.log("update: ",tableUpdateData);
	db.User.updateOne(
		{email: req.user.email}, tableUpdateData)
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
});

router.post("/UserLose", function (req, res) {
	console.log(req.user);
	let tableUpdateData = { $set: {} };
	console.log(req.body);
	tableUpdateData.$set["blackjack_lose"] = req.body.houseScore;
	console.log("update: ",tableUpdateData);
	db.User.updateOne(
		{email: req.user.email}, tableUpdateData)
	.then(function (results) {
		console.log("Returning updated data for table ", results);
		return res.send(results);
	})
});

// router.post("UserStats/:id", (req, res) => {
// 	db.UserStats.updateOne(
// 		{ _id: req.params.id }, req.body)
// 		.then(statsData => {
// 			console.log("Stats Data: ", statsData);
// 			res.json(statsData);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(404).json(err);
// 		});
// });

module.exports = router;