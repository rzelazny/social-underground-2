import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
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
                    card1Val = data.data.cards[0].value;
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
                            value: data.data.cards[1].value,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                )
            })
            // .catch(err => setHouseHand.error(err));
    }, []);

    // function card1Points() {
    //     console.log(data.data.cards[0].value);

    //     // sets value of face card //
    //     if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
    //         return data.data.cards[0].value === 10;
    //     }
        
    //     // sets value for ace  //
    //     if (data.data.cards[0].value === "ACE") {
    //         return data.data.cards[0].value = 11;
    //     } 

    //     return data.data.cards[0].value;
    // }










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

    // function updatePoints() {
    //     setHouseHand(
    //         [
    //             {
    //                 value: totalPoints(),
    //             }, 
    //             {
    //                 value: totalPoints(),
    //             }
    //         ]
    //         )
    // }

    // function totalPoints() {
    //     return 11;
    // }

    // function updatePoints() {
    //     setHousePoints(
    //         parseInt(houseHand[0].value) + parseInt(houseHand[1].value)
    //     );
    //     setPlayer1Points(
    //         // totalPointsPlayer1()
    //         10
    //     )
    // }
    
    // function totalPointsPlayer1() {
    //     // sets value of face cards //
    //     if (player1Hand[0].value === "JACK" || player1Hand[0].value === "QUEEN" || player1Hand[0].value === "KING") {
    //         return player1Hand[0].value === 10;
    //     }
    //     if (player1Hand[1].value === "JACK" || player1Hand[1].value === "QUEEN" || player1Hand[1].value === "KING") {
    //         return player1Hand[1].value === 10;
    //     }
        
    //     // sets value for ace depending on current point value //
    //     if (player1Hand[0].value === "ACE") {
    //         return player1Hand[0].value = 11;
    //     } else if (player1Hand[1].value === "ACE" && player1Hand[0].value < 11) {
    //         return player1Hand[1].value = 11;
    //     } else if (player1Hand[1].value === "ACE" && player1Hand[0].value > 10) {
    //         return player1Hand[1].value = 1;
    //     }

    // console.log(player1Hand[0].value);
    // console.log(player1Hand[1].value);
    // return parseInt(player1Hand[0].value) + parseInt(player1Hand[1].value)
    // }


    function addPlayers() {

        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: 0, 
            Points: housePoints, 
            Bust: false, 
            Hand: houseHand, 
            Stand: false
        });
    
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: 0, 
            Points: player1Points, 
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
            {/* <button onClick={updatePoints} >update points</button> */}
            <button onClick={addPlayers} >add players</button>
            <button onClick={consolePlayers} >see console log</button>
    </Container>
    );
}

export default BlackjackPlayers;