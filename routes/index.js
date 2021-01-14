const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

var isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
console.log("Running API routes");
router.use("/api", apiRoutes);


// router.get("/home", isAuthenticated, function (req, res) {
//   console.log("sending them to :" + req.url);
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });


module.exports = router;
