import React, { useState, useEffect } from "react";
import $ from "jquery";
import socketIOClient from "socket.io-client";
import GamingTable from "../components/GamingTable";
import { ChatContainer, ChatItem, ChatWindow } from "../components/ChatLog/ChatLog";


const ENDPOINT = process.env.PORT || "http://localhost:3000";
var curTable = document.defaultView.location.pathname.split("casino").pop();
//Elements and vars for chat log
var chatScroll = $("#chat-log");
var chatInput = $("#chat-input");
let chatLength = 0;

function Casino() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        //create connection for chat log
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });

        return () => socket.disconnect();
    }, []);

    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
            .then((userData) => {
                console.log(userData)
                if (!userData.email) {
                    window.location.replace("/login");
                }
                else {
                    console.log("You're logged in!");
                    getChatLogs();
                }
            })
    }

    init();

    //populate chat log
    function getChatLogs() {
        $.get("/api/chat" + curTable, function (chatLog) {
            //chat length is used to check for new messages being posted
            chatLength = chatLog.length;
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
            <p>
                It's <time dateTime={response}>{response}</time>
            </p>
            <GamingTable />
            <br />
            <ChatWindow>
                <ChatItem />
            </ChatWindow>
            <ChatContainer />
            {/* // Footer will go here */}
        </div>
    )
}

export default Casino;