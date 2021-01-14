import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackPlayers from "../BlackjackPlayers"
import BlackjackDirections from "../BlackjackDirections"

function BlackjackGame() {

    function restart() {
        console.log("restart triggered");
        var gameBody = document.getElementById("gameBody");
        return gameBody.innerHTML= <BlackjackDirections />
    }

    function hit() {
        console.log("hit triggered")
    }

    function stand() {
        console.log("stand triggered")
    }

    return (
        <Container id="gameBody" >
            <BlackjackPlayers />
            <BlackjackButtons
            restart={restart}
            hit={hit}
            stand={stand}
            />
        </Container>
    );
}

export default BlackjackGame;
