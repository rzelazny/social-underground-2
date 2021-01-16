import React, { useEffect, useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, CardImg, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackScoreCard from "../BlackjackScoreCard";
import API from "../../utils/API";

var houseScore = 0;
console.log(houseScore);
var player1Score = 0;
console.log(player1Score);

function BlackjackGame() {

    const [displayScoreCard, setDisplayScoreCard] = useState(false);

    const [housePoints, setHousePoints] = useState(0);
    const [player1Points, setPlayer1Points] = useState(0);

    const [houseBust, setHouseBust] = useState(false);
    const [player1Bust, setPlayer1Bust] = useState(false);

    const [houseStand, setHouseStand] = useState(false);
    const [player1Stand, setPlayer1Stand] = useState(false);

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
        API.drawHouse(houseHand, housePoints)
            .then(data => {
                // console.log(data);
                let card1Val;
                let card2Val;
                let handVal;
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

                handVal = card1Val + card2Val;

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
                setHousePoints(
                    handVal
                )
            })
    }, []);

    useEffect(() => {
        if (!player1Hand) {
            return;
        }
        API.drawPlayer1(player1Hand, player1Points)
                .then(data => {
                    // console.log(data)
                    let card1Val;
                    let card2Val;
                    let handVal;
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
                handVal = card1Val + card2Val;
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
                    setPlayer1Points(
                        handVal
                    )
                })
    }, []);

    const [house, setHouse] = useState({
        Name: 'House', 
        ID: 0, 
        Score: houseScore, 
        Points: housePoints, 
        Bust: houseBust, 
        Hand: houseHand, 
        Stand: houseStand
    });

    const [player1, setPlayer1] = useState({
            Name: 'Player1', 
            ID: 1, 
            Score: player1Score, 
            Points: player1Points, 
            Bust: player1Bust, 
            Hand: player1Hand,
            Stand: player1Stand
    });

    function updatePlayers() {
        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: houseScore, 
            Points: housePoints, 
            Bust: houseBust, 
            Hand: houseHand, 
            Stand: houseStand
        });
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: player1Score, 
            Points: player1Points, 
            Bust: player1Bust, 
            Hand: player1Hand,
            Stand: player1Stand
        });
    }

    function restart() {
        console.log("restart triggered");
        // var gameBody = document.getElementById("gameBody");
        // gameBody.innerHTML = "";
        // BlackjackGame()
        window.location.reload(false); //ok, so this reload back to directions
        // figure out better way to do this without reloading the entire page
    }

    function hit() {
        console.log("hit triggered")
        player1Hit();
        // setTimeout(function () {
        //     updatePlayers();
        // }, 500);
            //need to manually press the button to run update players function
        // setTimeout(function () {
        //     checkBust();
        // }, 500);
            //need to manually press the button to run checkBust function

    }

    function checkBust() {
        if (player1Points > 21) {
            console.log("will end round");
            endRound();
        }
        else {
            // run house hit logic
            console.log("will run hit house logic");
        }
    }

    function player1Hit() {
            API.drawHitPlayer1(player1Hand)
                .then(data => {
                    // console.log(data);
                    let hitCardVal;
                    let handVal;
                    // sets value of face card //
                    if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                        hitCardVal = 10;
                    }
                    // sets value for ace  //
                    else if (data.data.cards[0].value === "ACE") {
                        hitCardVal = 11;
                    } 
                    else{
                        hitCardVal = parseInt(data.data.cards[0].value);
                    }
                    handVal = hitCardVal + player1Points;
                    setPlayer1Hand(
                    [
                        ...player1Hand,
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: hitCardVal,
                            imgUrl: data.data.cards[0].image
                        }
                    ]
                    )
                    setPlayer1Points(
                        handVal
                    )
                })
    }


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
                // houseScore ++;
                // console.log(houseScore);
                    //this will work however will be lost if the page reloads how it has been on restart
            // if player one wins
        //remove buttons
    }

    function consolePlayers() {
        console.log("----House------")
        console.log(houseHand);
        console.log(housePoints);
        console.log(house);
        console.log("----Player 1------")
        console.log(player1Hand);
        console.log(player1Points);
        console.log(player1);
    }

    return (
        <Container id="gameBody" >
            {displayScoreCard
            && <BlackjackScoreCard 
            // add function for play again button
            /> 
            }
            <Container id="players">
                <div>
                    <button onClick={updatePlayers} >update players</button>
                    <button onClick={checkBust} >check bust</button>
                    <button onClick={consolePlayers} >see console log</button>
                </div>
                <Card id="house">
                    <CardTitle tag="h5">{house.Name}</CardTitle>
                    <CardText>Points: {housePoints}</CardText>
                    <div id="houseHand">
                        <CardImg id="cardOneHouse" src={houseHand[0].imgUrl} alt="{houseHand[0].code}" />
                        <CardImg id="cardTwoHouse" src={houseHand[1].imgUrl} alt="{houseHand[1].code}" />
                    </div>
                </Card>
                <Card id="player1">
                    <CardTitle tag="h5">{player1.Name}</CardTitle>
                    <CardText>Points: {player1Points}</CardText>
                    <div id="player1Hand">
                        <CardImg id="cardOnePlayer1" src={player1Hand[0].imgUrl} alt="{player1Hand[0].code}" />
                        <CardImg id="cardTwoPlayer1" src={player1Hand[1].imgUrl} alt="{player1Hand[1].code}" />
                        {player1Hand.length >= 3
                        && <CardImg className="hitCardPlayer1" src={player1Hand[2].imgUrl} alt="{player1Hand[2].code}" />}
                        {player1Hand.length >= 4
                        && <CardImg className="hitCardPlayer1" src={player1Hand[3].imgUrl} alt="{player1Hand[3].code}" />}
                        {player1Hand.length >= 5
                        && <CardImg className="hitCardPlayer1" src={player1Hand[4].imgUrl} alt="{player1Hand[4].code}" />}
                        {player1Hand.length >= 6
                        && <CardImg className="hitCardPlayer1" src={player1Hand[5].imgUrl} alt="{player1Hand[5].code}" />}
                        {player1Hand.length >= 7
                        && <CardImg className="hitCardPlayer1" src={player1Hand[6].imgUrl} alt="{player1Hand[6].code}" />}
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
