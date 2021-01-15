const express = require("express");
const session = require('express-session');
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "games rule", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialunderground2",{
  useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

//websocket stuff
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);

const io = socketIo(server);
/**
 * Server side input handler, modifies the state of the players and the
 * game based on the input it receives. Everything here runs asynchronously.
 */

let interval;

io.on("connection", (socket) => {
  console.log("New client connected ");
  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 1000);
  // socket.on("disconnect", () => {
  //   console.log("Client disconnected");
  //   clearInterval(interval);
  // });
  

  //User has sent a message to the server
  socket.on("chat-message", (chatMessage) => {
    console.log("Server recieved message");
  });

});

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
