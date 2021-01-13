import React from "react";
import { } from "reactstrap";
import $ from "jquery";

function getTables() {
    $.get("api/tables", function (curTables) {

        for (i = 0; i < curTables.length; i++) {
            var columnCount = i;
            var card = $("<div>").addClass("card game-table");
            var cardBody = $("<div>").addClass("card-body");
            cardBody.attr("id", "resultCardBody");

            //create stats to append
            var id = $("<h4>").addClass("card-text").text("Table: " + curTables[i].id + " - " + curTables[i].game);
            var user1 = $("<p>").addClass("card-text").text("Player 1: " + curTables[i].user1);
            var user2 = $("<p>").addClass("card-text").text("Player 2: " + curTables[i].user2);
            var user3 = $("<p>").addClass("card-text").text("Player 3: " + curTables[i].user3);
            var user4 = $("<p>").addClass("card-text").text("Player 4: " + curTables[i].user4);
            var user5 = $("<p>").addClass("card-text").text("Player 5: " + curTables[i].user5);
            var joinBtn = $('<button/>', {
                text: "Join Table",
                id: "btnJoin",
                table: curTables[i].id,
                click: joinTable
            })
            //append stats to the card
            cardBody.append(id, user1, user2, user3, user4, user5, joinBtn);
            card.append(cardBody);

            //there are 3 columns we append in sequence, the 4th table should be in the first column again.
            while (columnCount > 2) {
                columnCount -= 3;
            }

            //append card to the correct column on the homepage
            $("#current-tables" + columnCount).append(card);
        };
    }
    );
}

export default getTables;