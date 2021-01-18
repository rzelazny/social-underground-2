import React, { useState, useEffect } from "react";
import $ from "jquery";
import {socket} from "../components/Socket/Socket";
import GamingTable from "../components/GamingTable";
import { ChatContainer, ChatWindow, displayChat } from "../components/ChatLog/ChatLog";

var curTable = document.defaultView.location.pathname.split("casino/").pop();

function Casino() {
    const [curEmail, setEmail] = useState("");
    const [chatRoom, setRoom] = useState("");

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
                    $.get("/api/table/"+ curTable)
                    .then((data)=>{
                        console.log(data);
                        setRoom(data.roomNumber);
                        setEmail(userData.email);
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
            <GamingTable />
            <br />
            <ChatWindow />
            <ChatContainer socket={socket} email={curEmail} room={chatRoom} />
            {/* // Footer will go here */}
        </div>
    )
}

export default Casino;