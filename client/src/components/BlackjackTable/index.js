import React, { useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackDirections from "../BlackjackDirections";
import BlackjackGame from "../BlackjackGame";
import BlackjackScoreCard from "../BlackjackScoreCard";

function BlackjackTable() {
    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);
    const [displayScoreCard, setDisplayScoreCard] = useState(false);

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDisplayDirections(false);
    }

    function endRound() {
        console.log("end of round triggered");
        setDisplayScoreCard(true);
    }

    return (
        <Container id="blackjackTable">
            <h2>Single Player Blackjack</h2>
            <br />
            {displayDirections
            && <BlackjackDirections 
            onStart={onStart}
            />}
            {displayScoreCard
            && <BlackjackScoreCard /> 
            }
            {startGame 
            && <BlackjackGame /> 
            }
        </Container>
    );
}

export default BlackjackTable;
