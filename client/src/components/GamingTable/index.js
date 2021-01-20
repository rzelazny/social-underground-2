import React from "react";
import "./style.css"
import GameChoice from "../GameChoice";

function GamingTable({room, curTable}) {
    return (
        // Game choice component will be here and the blackjack table will be an option in the game choice component //
        <GameChoice room={room} curTable={curTable}/>
    );
}

export default GamingTable;