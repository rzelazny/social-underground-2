import React, { useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackDirections from "../BlackjackDirections";
import BlackjackGame from "../BlackjackGame";

function BlackjackTable() {
    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDisplayDirections(false);
    }

    return (
        <Container id="blackjackTable">
            <h2>Single Player Blackjack</h2>
            <br />
            {displayDirections
            && <BlackjackDirections 
            onStart={onStart}
            />}
            {startGame 
            && <BlackjackGame /> 
            }
        </Container>
    );
}

export default BlackjackTable;
