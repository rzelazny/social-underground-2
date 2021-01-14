import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackPlayers from "../BlackjackPlayers"

function BlackjackGame() {

    return (
        <Container id="gameBody" >
            <p>The blackjack game will go here.</p>
                <BlackjackPlayers />
                <BlackjackButtons />
    </Container>
    );
}

export default BlackjackGame;
