import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackDirections from "../BlackjackDirections";
import BlackjackGame from "../BlackjackGame";
import BlackjackScoreCard from "../BlackjackScoreCard";

function BlackjackTable() {

    function onStart() {
        console.log("clicking start btn")
    }

    return (
        <Container id="blackjackTable">
            <h2>Single Player Blackjack</h2>
            <br />
            <BlackjackDirections 
            onStart={onStart}
            /> 
            {/* hide the directions on click of start */}
            <BlackjackScoreCard />
            {/* have this card hidden until the end of game is called */}
            <BlackjackGame />
            {/* display this hidden component on click of start btn */}
        </Container>
    );
}

export default BlackjackTable;
