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


//get all running games for the setup page
router.get("/allgames", function (req, res) {
	db.Game.find({})
		.populate("players")
		.then(function (results) {
			console.log("get tables returning data");
			return res.send(results);
		})
});

//create a new game
router.post("/newGame", ({ body }, res) => {
	console.log("Storing new game");

// 	db.Game.create(body)
// 		.then(dbGame => {
// 			console.log(dbGame);
// 			res.json(dbGame);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(404).json(err);
// 		});
// });

//create a new player
router.post("/newPlayer", ({ body }, res) => {
	console.log("Storing new player");
	console.log(body);
	db.Player.create({ name: body.name })
		.then(dbGame => {
			console.log(dbGame);
			res.json(dbGame);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//get the current game state
router.get("/gameState/:id", (req, res) => {
	db.Game.findById(req.params.id)
		.populate("players")
		.then(gameData => {
			console.log("GameData: ", gameData);
			res.json(gameData);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//get a player's data
router.get("/playerState/:id", (req, res) => {
	db.Player.findById(req.params.id)
		.populate("constructedBuildings")
		.then(playerData => {
			console.log("Player Data: ", playerData);
			res.json(playerData);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//update the game collection's phase and round
router.post("/updatePhase/:id", (req, res) => {
	db.Game.updateOne(
		{ _id: req.params.id },
		{
			$set:
			{
				curRound: req.body.curRound,
				curPhase: req.body.curPhase
			}
		})
		.then(gameData => {
			console.log("GameData: ", gameData);
			res.json(gameData);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//update the game collection
router.post("/updateGame/:id", (req, res) => {
	db.Game.updateOne(
		{ _id: req.params.id }, req.body)
		.then(gameData => {
			console.log("Game Data: ", gameData);
			res.json(gameData);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

//update a player collection
router.post("/updatePlayer/:id", (req, res) => {
	db.Player.updateOne(
		{ _id: req.params.id }, req.body)
		.then(playerData => {
			console.log("Player Data: ", playerData);
			res.json(playerData);
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
});

// //update the gameBoard collection
// router.post("/api/updateBoard/:id", (req, res) => {
// 	db.GameBoard.updateOne(
// 		{ _id: req.params.id }, req.body)
// 		.then(boardData => {
// 			console.log("Game Board Data: ", boardData);
// 			res.json(boardData);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(404).json(err);
// 		});
// });

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