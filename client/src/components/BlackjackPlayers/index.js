import React, {useState} from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackHand from "../BlackjackHand";

function BlackjackPlayers() {

    const [house, setHouse] = useState({});
    const [player1, setPlayer1] = useState({});

    function addPlayers(props) {

        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: props.houseHand, 
            Stand: false
        });
    
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: props.player1Hand,
            Stand: false
        });
    }

    function consolePlayers() {
        console.log(house);
        console.log(player1);
    }

    return (
        <Container id="players" >
            <p onClick={consolePlayers}>Click here for console log of players.</p>
            <p onClick={addPlayers}>Click here to add players.</p>
            <BlackjackHand />
    </Container>
    );
}

export default BlackjackPlayers;