import socketIOClient from "socket.io-client";
const SOCKET_URL = process.env.PORT || "http://localhost:3000";

export const socket = socketIOClient(SOCKET_URL,{
    "transports" : ['polling', 'websocket']
});

// {
//     "force new connection" : true,
//     "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
//     "timeout" : 10000,                  //before connect_error and connect_timeout are emitted.
//     "transports" : ["websocket"]
// }