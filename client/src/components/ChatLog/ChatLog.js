import React, { useEffect, useState } from "react";
import "./chatlog.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ChatContainer() {
    const [value, onChangeText] = React.useState("Chat here");

    function handleChange() {

    }

    function handleSubmit() {

    }

    return (
        <Container fluid>
            <form className="form-inline" id="chat-entry">
                <input type="text" className="form-control" id="chat-input" placeholder="Talk smack here" onChange={handleChange} />
                <button type="submit" className="btn btn-dark" id="send-chat"><i className="fas fa-share" onSubmit={handleSubmit}></i></button>
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

