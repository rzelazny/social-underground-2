import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";

function BlackjackHand() {
    const [houseHand, setHouseHand] = useState([]);
    const [player1Hand, setPlayer1Hand] = useState([]);
    const [handArray, setHandArray] = useState([]);

    useEffect(() => {
        if (!houseHand) {
            return;
        }

        API.drawHouse(houseHand)
            .then(res => {
                console.log(res)
                setHouseHand(
                    [
                        {
                            code: data.cards[0].code,
                            suit: data.cards[0].suit,
                            value: data.cards[0].value,
                            imgUrl: data.cards[0].image
                        }, 
                        {
                            code: data.cards[1].code,
                            suit: data.cards[1].suit,
                            value: data.cards[1].value,
                            imgUrl: data.cards[1].image
                        }
                    ]
                )
            })
            .catch(err => setHouseHand.error(err));
    }, []);

    useEffect(() => {
        if (!player1Hand) {
            return;
        }

        API.drawPlayer1(player1Hand)
                .then(res => {
                    console.log(res)
                    setPlayer1Hand(
                        [
                            {
                                code: data.cards[0].code,
                                suit: data.cards[0].suit,
                                value: data.cards[0].value,
                                imgUrl: data.cards[0].image
                            }, 
                            {
                                code: data.cards[1].code,
                                suit: data.cards[1].suit,
                                value: data.cards[1].value,
                                imgUrl: data.cards[1].image
                            }
                        ]
                    )
                })
                .catch(err => setPlayer1Hand.error(err));
    }, []);

    setHand([
        houseHand,
        player1Hand
    ])

    return (
        <Container id="players" >
            <p>The players hand will go here.</p>
        </Container>
    );
}

export default BlackjackHand;