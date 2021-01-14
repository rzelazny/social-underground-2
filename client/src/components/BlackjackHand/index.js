import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";

function BlackjackHand() {
    const [houseHand, setHouseHand] = useState([]);
    // const [player1Hand, setPlayer1Hand] = useState([]);
    // const [handArray, setHandArray] = useState([]);

    useEffect(() => {
        if (!houseHand) {
            return;
        }

        API.drawHouse(houseHand)
            .then(data => {
                console.log(data)
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

    // useEffect(() => {
    //     if (!player1Hand) {
    //         return;
    //     }

    //     API.drawPlayer1(player1Hand)
    //             .then(data => {
    //                 console.log(data)
    //                 setPlayer1Hand(
    //                     [
    //                         {
    //                             code: data.cards[0].code,
    //                             suit: data.cards[0].suit,
    //                             value: data.cards[0].value,
    //                             imgUrl: data.cards[0].image
    //                         }, 
    //                         {
    //                             code: data.cards[1].code,
    //                             suit: data.cards[1].suit,
    //                             value: data.cards[1].value,
    //                             imgUrl: data.cards[1].image
    //                         }
    //                     ]
    //                 )
    //             })
    //             .catch(err => setPlayer1Hand.error(err));
    // }, []);

    // setHandArray([
    //     houseHand,
    //     player1Hand
    // ])

    function seeConsole() {
        console.log(houseHand);
        // console.log("hello"); //works can see in here
    }

    return (
        <Container id="players" onClick={seeConsole}>
            <p>The players hand will go here.</p>
        </Container>
    );
}

export default BlackjackHand;