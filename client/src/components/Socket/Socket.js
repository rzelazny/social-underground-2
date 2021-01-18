import socketIOClient from "socket.io-client";
const SOCKET_URL = process.env.PORT || "http://localhost:3000";

export const socket = socketIOClient(SOCKET_URL);