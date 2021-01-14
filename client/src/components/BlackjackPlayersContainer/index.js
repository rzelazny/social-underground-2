import React, {useState} from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackPlayersContainer() {

    const [house, setHouse] = useState({});
    const [player1, setPlayer1] = useState({});
    const [playerArray, setPlayerArray] = useState([])
    const [hand, setHand] = useState([])

    function addPlayers() {
        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: hand[0], 
            Stand: false
        });
    
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: hand[1], 
            Stand: false
        });
    
        setPlayerArray([
            house,
            player1
        ])
    }

    return (
        <Container id="players" >
            <p>The blackjack players will go here.</p>
    </Container>
    );
}

export default BlackjackPlayersContainer;