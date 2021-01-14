import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlackjackHand from "../BlackjackHand";
import API from "../../utils/API";


function BlackjackPlayers() {

    const [house, setHouse] = useState({});
    const [player1, setPlayer1] = useState({});
    const [houseHand, setHouseHand] = useState([]);
    const [player1Hand, setPlayer1Hand] = useState([]);

    useEffect(() => {
        if (!houseHand) {
            return;
        }

        API.drawHouse(houseHand)
            .then(data => {
                // console.log(data)
                setHouseHand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: data.data.cards[0].value,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: data.data.cards[1].value,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                )
            })
            // .catch(err => setHouseHand.error(err));
    }, []);

    useEffect(() => {
        if (!player1Hand) {
            return;
        }

        API.drawPlayer1(player1Hand)
                .then(data => {
                    // console.log(data)
                    setPlayer1Hand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: data.data.cards[0].value,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: data.data.cards[1].value,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                    )
                })
                // .catch(err => setPlayer1Hand.error(err));
    }, []);


    function addPlayers(props) {

        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: houseHand, 
            Stand: false
        });
    
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: 0, 
            Points: 0, 
            Bust: false, 
            Hand: player1Hand,
            Stand: false
        });
    }

    function consolePlayers() {
        console.log(house);
        console.log(player1);
        console.log(houseHand);
        console.log(player1Hand);
    }

    return (
        <Container id="players" >
            <p onClick={consolePlayers}>Click here for console log of players.</p>
            <p onClick={addPlayers}>Click here to add players.</p>
            {/* <BlackjackHand /> */}
    </Container>
    );
}

export default BlackjackPlayers;