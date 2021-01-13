const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");
const htmlRoutes = require("./html-routes");

// API Routes
console.log("Running API routes");
router.route("/api", apiRoutes);

// HTML Routes
// console.log("Running HTML routes");
// router.route("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
