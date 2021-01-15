import React, { useEffect, useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, CardImg, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackScoreCard from "../BlackjackScoreCard";
import API from "../../utils/API";


function BlackjackGame() {

    const [displayScoreCard, setDisplayScoreCard] = useState(false);
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
                else if (card1Val > 10 && data.data.cards[1].value === "ACE") {
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
                else if (card1Val > 10 && data.data.cards[1].value === "ACE") {
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

    function restart() {
        console.log("restart triggered");
        // var gameBody = document.getElementById("gameBody");
        // gameBody.innerHTML = "";
        // BlackjackGame()
        window.location.reload(false); //ok, so this reload back to directions
    }

    function hit() {
        console.log("hit triggered")
        //player one hit - call api, generate card, add to hand, recalculate point value
        //check for bust- see if points are >22... if so end round ... if not run hit house logic
    }

    //player one hit

    // check for bust

    //house hit logic
        //if house has 17+ points it will stand 
        //if it has < 17 points it will hit
            //if hit run house bust check function

    //house bust check
        // if bust end round

    function stand() {
        console.log("stand triggered");
        // on stand logic
        //player 1 now stands
        // check to see if house stands, has 17+ points, or has > points - if does end round
        // if not standing run house hit again
        // if house didnt bust resend to on stand logic
        endRound();
    }


    function endRound() {
        console.log("end of round triggered");
        setDisplayScoreCard(true);
        //end round logic
        // if ended bc of bust... whoever didnt bust wins & show score      
        //who wins logic:
            // if tie
            // if house wins
            // if player one wins
        //remove buttons
    }

    return (
        <Container id="gameBody" >
            {displayScoreCard
            && <BlackjackScoreCard 
            // add function for place again button
            /> 
            }
            <Container id="players">
                <div>
                    <button onClick={addPlayers} >add players</button>
                    <button onClick={consolePlayers} >see console log</button>
                </div>
                <Card id="house">
                    <CardTitle tag="h5">{house.Name}</CardTitle>
                    <CardText>Points: {house.Points}</CardText>
                    <div id="houseHand">
                        <CardImg id="cardOneHouse" src={houseHand[0].imgUrl} alt="{houseHand[0].code}" />
                        <CardImg id="cardTwoHouse" src={houseHand[1].imgUrl} alt="{houseHand[1].code}" />
                    </div>
                </Card>
                <Card id="player1">
                    <CardTitle tag="h5">{player1.Name}</CardTitle>
                    <CardText>Points: {player1.Points}</CardText>
                    <div id="player1Hand">
                        <CardImg id="cardOnePlayer1" src={player1Hand[0].imgUrl} alt="{player1Hand[0].code}" />
                        <CardImg id="cardTwoPlayer1" src={player1Hand[1].imgUrl} alt="{player1Hand[1].code}" />
                    </div>
                </Card>
            </Container>
            <BlackjackButtons
            restart={restart}
            hit={hit}
            stand={stand}
            />
        </Container>
    );
}

export default BlackjackGame;
