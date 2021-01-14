import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackPlayers from "../BlackjackPlayers"

function BlackjackGame() {

    function restart() {
        console.log("I see this restart")
    }

    return (
        <Container id="gameBody" >
            <BlackjackPlayers />
            <BlackjackButtons />
        </Container>
    );
}

export default BlackjackGame;
