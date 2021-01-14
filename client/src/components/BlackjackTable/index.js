import React, { useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackDirections from "../BlackjackDirections";
import BlackjackGame from "../BlackjackGame";
// import BlackjackScoreCard from "../BlackjackScoreCard";

function BlackjackTable() {
    const [directions, setDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDirections(false);
    }

    return (
        <Container id="blackjackTable">
            <h2>Single Player Blackjack</h2>
            <br />
            {directions
            && <BlackjackDirections 
            onStart={onStart}
            />}
            {/* <BlackjackScoreCard /> */}
            {/* have this card hidden until the end of game is called */}
            {startGame 
            && <BlackjackGame /> 
            }
        </Container>
    );
}

export default BlackjackTable;
