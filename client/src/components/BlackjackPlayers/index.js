import React, { useEffect, useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, CardImg, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";


function BlackjackPlayers() {

    const [house, setHouse] = useState({});
    const [player1, setPlayer1] = useState({});

    const [houseHand, setHouseHand] = useState([
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }, 
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }
    ]);
    const [player1Hand, setPlayer1Hand] = useState([
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }, 
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }
    ]);

    const [housePoints, setHousePoints] = useState();
    const [player1Points, setPlayer1Points] = useState();

    useEffect(() => {
        if (!houseHand) {
            return;
        }

        API.drawHouse(houseHand)
            .then(data => {
                // console.log(data);
                let card1Val;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                } 
                else{
                    card1Val = parseInt(data.data.cards[0].value);
                }

                let card2Val;
                // sets value of face card //
                if (data.data.cards[1].value === "JACK" || data.data.cards[1].value === "QUEEN" || data.data.cards[1].value === "KING") {
                    card2Val = 10;
                }
                // sets value for ace  //
                else if (card1Val < 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 11;
                } 
                else if (card1Val > 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 1;
                } 
                else{
                    card2Val = parseInt(data.data.cards[1].value);
                }

                setHouseHand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: card1Val,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: card2Val,
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
                    let card1Val;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                } 
                else{
                    card1Val = parseInt(data.data.cards[0].value);
                }

                let card2Val;
                // sets value of face card //
                if (data.data.cards[1].value === "JACK" || data.data.cards[1].value === "QUEEN" || data.data.cards[1].value === "KING") {
                    card2Val = 10;
                }
                // sets value for ace  //
                else if (card1Val < 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 11;
                } 
                else if (card1Val > 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 1;
                } 
                else{
                    card2Val = parseInt(data.data.cards[1].value);
                }
                    setPlayer1Hand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: card1Val,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: card2Val,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                    )
                })
                // .catch(err => setPlayer1Hand.error(err));
    }, []);

    function addPlayers() {

        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: 0, 
            Points: houseHand[0].value + houseHand[1].value, 
            Bust: false, 
            Hand: houseHand, 
            Stand: false
        });
    
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: 0, 
            Points: player1Hand[0].value + player1Hand[1].value, 
            Bust: false, 
            Hand: player1Hand,
            Stand: false
        });
    }

    function consolePlayers() {
        console.log(house);
        console.log(player1);
    }

    return (
        <Container id="players">
            <div>
                <button onClick={addPlayers} >add players</button>
                <button onClick={consolePlayers} >see console log</button>
            </div>
            <Card id="house">
                <CardTitle tag="h5">{house.Name}</CardTitle>
                <CardText tag="h5">Points: {house.Points}</CardText>
                <div id="houseHand">
                    <CardImg id="cardOneHouse" src={houseHand[0].imgUrl} alt="{houseHand[0].code}" />
                    <CardImg id="cardTwoHouse" src={houseHand[1].imgUrl} alt="{houseHand[1].code}" />
                </div>
            </Card>
            <Card id="player1">
                <CardTitle tag="h5">{player1.Name}</CardTitle>
            </Card>

        </Container>
    );
}

export default BlackjackPlayers;