import React from "react";
import "./style.css"
// import $ from 'jquery';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackDirections() {
    return (
        <Container id="blackjackDirections">
            <p>Try to get as close to 21 without busting. If you want another card press 'hit' and you will be dealt another card. If you want to stay with your hand and end the game press 'stand'. You can hit as many times as you want but beware, if you bust you lose. To keep playing press 'play another round'. Each round you play, your score will be displayed and will increment as you win. If you tie with the House you will not be awarded any points. If you win you will be awarded 1 point and if the House wins it will be awarded 1 point.</p>
        </Container>
    );
}

export default BlackjackDirections;