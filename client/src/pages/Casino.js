import React, { useState, useEffect } from "react";
import {Row, Col} from "reactstrap";
import $ from "jquery";
import { socket } from "../components/Socket/Socket";
import GamingTable from "../components/GamingTable";
import Nav from "../components/Nav/Navbar";
import { ChatContainer, ChatWindow, displayChat } from "../components/ChatLog/ChatLog";

var curTable = document.defaultView.location.pathname.split("casino/").pop();

function Casino() {
    const [curEmail, setEmail] = useState("");
    const [chatRoom, setRoom] = useState("");
    const [game, setGame] = useState("");

    useEffect(() => {
        init();
        socket.on("update-chat", message => {
            console.log("update chat recieved");
            displayChat(message);
        });
        return () => socket.disconnect();
    }, []);

    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
            .then((userData) => {
                if (!userData.email) {
                    window.location.replace("/login");
                }
                else {
                    $.get("/api/table/" + curTable)
                        .then((data) => {
                            console.log(data);
                            setRoom(data.roomNumber);
                            setEmail(userData.email);
                            setGame(data.game);
                            console.log("emitting room:", data.roomNumber)
                            socket.emit("join-room", data.roomNumber);
                            //send welcome message
                            let message = {
                                email: userData.email,
                                message: " has joined the chat.",
                                room: data.roomNumber
                            }
                            displayChat(message);
                            socket.emit("chat-message", message)
                        })
                }
            })
    }

    return (
        <div>

            <Nav page={curTable} socket={socket} email={curEmail} room={chatRoom} />
            <GamingTable room={chatRoom} curTable={curTable} game={game} />
            <br />
            <Row>
                <Col lg={{ size: 6, offset: 3 }}>
                    <ChatWindow />
                    <ChatContainer socket={socket} email={curEmail} room={chatRoom} />
                </Col>
            </Row>
            {/* // Footer will go here */}
        </div>
    )
}

export default Casino;