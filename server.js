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

const io = socketIo(server, {cors: {origins:"social-underground-2.herokuapp.com/:* https://social-underground-2.herokuapp.com/:*"}}); //{origins:"social-underground-2.herokuapp.com/:* https://social-underground-2.herokuapp.com/:*"}
/**
 * Server side input handler, modifies the state of the players and the
 * game based on the input it receives. Everything here runs asynchronously.
 */

io.on("connection", (socket) => {
  console.log("New client connected ");
  
  //User has requested to join a room
  socket.on("join-room", (room) => {
    console.log("Server got join room", room);
    socket.join(room);
  });

  //User has sent a message to the server
  socket.on("chat-message", (chatMessage) => {
    console.log("Server got chat message", chatMessage);
    socket.to(chatMessage.room).emit("update-chat", chatMessage);
  });

  //User has sent a photo to the server
  socket.on("send-photo", (photo) => {
    console.log("server got photo");
    socket.to(photo.room).emit("send-photo", photo);
  });

  //User has sent a photo to the server
  socket.on("start-rps", (room) => {
    console.log("starting game of rps");
    socket.to(room).emit("start-rps");
  });

  //Player1 has sent a webcam frame to the server
  socket.on("send-frame-1", (frame) => {
    socket.to(frame.room).emit("send-frame-1", frame);
  });

  //Player2 has sent a webcam frame to the server
  socket.on("send-frame-2", (frame) => {
    socket.to(frame.room).emit("send-frame-2", frame);
  });

  //Player3 has sent a webcam frame to the server
  socket.on("send-frame-3", (frame) => {
    socket.to(frame.room).emit("send-frame-3", frame);
  });

});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
