import React, { useState, useEffect } from "react";
import $ from "jquery";
import socketIOClient from "socket.io-client";
import GamingTable from "../components/GamingTable";
import { ChatContainer, ChatItem, ChatWindow } from "../components/ChatLog/ChatLog";


const ENDPOINT = process.env.PORT || "http://localhost:3000";
var curTable = document.defaultView.location.pathname.split("casino").pop();
var curEmail = "";
//Elements and vars for chat log
var chatScroll = $("#chat-log");
let chatLength = 0;

function Casino() {
    const [curEmail, setEmail] = useState("");
    const [chatRoom, setRoom] = useState("");
    let socket = socketIOClient(ENDPOINT);

    // useEffect(() => {
    //     //create connection for chat logs
    //     socket = socketIOClient(ENDPOINT);
    //     setSocket(socket);

    //     socket.on("update-chat", data => {
    //         getChatLogs();
    //     });
    //     return () => socket.disconnect();
    // }, []);

    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
            .then((userData) => {
                if (!userData.email) {
                    window.location.replace("/login");
                }
                else {
                    setEmail(userData.email);
                    getChatLogs();
                    $.get("/api/table/"+ curTable)
                    .then((tableData)=>{
                        console.log(tableData);
                        setRoom(tableData.roomNumber);
                        socket.emit("join-room", chatRoom);
                    })
                }
            })
    }

    init();

    socket.on("update-chat", data => {
        console.log("update chat recieved");
        getChatLogs();
    });

    //populate chat log
    function getChatLogs() {
        $.get("/api/chat/" + chatRoom, function (chatLog) {
            console.log("get chat running", chatLog);
            //chat length is used to check for new messages being posted
            chatLength = chatLog.length;
            $("#chat-log").empty();
            for (let i = 0; i < chatLength; i++) {
                var chatLine = $("<li>")
                //chatLine.attr("list-style", "none");
                chatLine.text(chatLog[i].user + ": " + chatLog[i].message);
                $("#chat-log").append(chatLine);
            };
            //scroll to the bottom
            chatScroll.scrollTop(1000);
        });
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