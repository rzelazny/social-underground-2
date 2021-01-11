const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

// API Routes
router.route("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
