import React, { useState, useEffect } from "react";
import $ from "jquery";
import socketIOClient from "socket.io-client";
import GamingTable from "../components/GamingTable";
import {ChatContainer, ChatItem, ChatWindow} from "../components/ChatLog/ChatLog";


const ENDPOINT = process.env.PORT || "http://localhost:3000";

function Casino() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });

        return () => socket.disconnect();
    }, []);

    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
        .then((userData)=>{
            console.log(userData)
            if(!userData.email){
                window.location.replace("/login");
            }
            else{
                console.log("You're logged in!");
            }
        })
    }

    init();

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