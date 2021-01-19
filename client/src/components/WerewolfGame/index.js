import React, { useState } from "react";
import "./style.css"
import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function WerewolfGame() {

    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);

    // [players, setPlayers] = setState();

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDisplayDirections(false);
    }

    return(
        <Container id="werewolfTable">
            <h2>Werewolf</h2>
            <br />
                {displayDirections
                && 
                <div id="directions">
                    <p>some basic instructions will go here</p>
                    <Button color="danger" onClick={onStart}>Start</Button>
                </div>
                }
                {startGame 
                && 
                <p>The game will display here</p> 
                }
        </Container>
    )
}

export default WerewolfGame;