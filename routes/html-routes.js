const router = require("express").Router();
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

//go home, default path
router.get("/", function(req, res) {
    console.log("html get home");
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

//go to the main boardgame page
router.get("/gameboard/:id", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gameboard.html"));
});

//go to for game setup page
router.get("/setup", isAuthenticated, function(req, res) {
    console.log("html get setup");
    res.sendFile(path.join(__dirname, "../public/setup.html"));
});

module.exports = router;