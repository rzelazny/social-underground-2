import axios from "axios";

export default {
    drawHouse: function () {
        return axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2");
    },
    drawPlayer1: function () {
        return axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2");
    },
    drawHitPlayer1: function () {
        return axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    },
    drawHitHouse: function () {
        return axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    }
};