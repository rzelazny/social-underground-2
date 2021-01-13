import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";

function BlackjackGame() {
    return (
        <Container >
            <p>The blackjack game will go here.</p>
            <div id="gameBody">
                <div className="players" id="players"></div>
                <BlackjackButtons />
            </div>
    </Container>
    );
}

export default BlackjackGame;
