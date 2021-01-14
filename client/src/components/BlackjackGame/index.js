import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackPlayersContainer from "../BlackjackPlayersContainer"

function BlackjackGame() {

    return (
        <Container id="gameBody" >
            <p>The blackjack game will go here.</p>
                <BlackjackPlayersContainer />
                <BlackjackButtons />
    </Container>
    );
}

export default BlackjackGame;
