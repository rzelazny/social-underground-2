import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./chatlog.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ChatContainer({ socket, email, room }) {
    const [chat, setChangeText] = useState("");
    let myEmail = email;
    let myRoom = room;
    //functions sends the message to the server on submit
    function handleSubmit(event) {
        console.log("Chat form submitted", chat, myRoom);
        event.preventDefault();
        var chatMessage = {
            email: myEmail,
            message: chat,
            room: myRoom
        };
        console.log("socket and email", socket, myEmail);
        $.post("/api/chat", chatMessage)
            .then((results) => {
                console.log("post chat", results)

                //Send the message to the server
                socket.emit("chat-message", chatMessage)
                console.log("chat message emitted");
            })
    }

    //function updates the chat state when the user types
    const handleChange = event => {
        console.log("form changed");
        const { value } = event.target;
        setChangeText(value);
    };

    return (
        <Container fluid>
            <form className="form-inline" id="chat-entry" onSubmit={handleSubmit}>
                <input type="text" className="form-control" id="chat-input" placeholder="Talk smack here" onChange={handleChange} />
                <button type="submit" className="btn btn-dark" id="send-chat"><i className="fas fa-share"  ></i></button>
            </form>
        </Container>
    );
}

export function ChatWindow({ children }) {
    return (
        <div id="chat-log" className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ChatItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}

