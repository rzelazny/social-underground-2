const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");
const htmlRoutes = require("./html-routes");

// API Routes
console.log("Running API routes");
router.use("/api", apiRoutes);
console.log("We've gone too far")
// HTML Routes
// console.log("Running HTML routes");
// router.route("/", htmlRoutes);

// If no API routes are hit, send the React app
// if (process.env.NODE_ENV === "production") {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// }
// else{
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
//}


module.exports = router;
