import React from "react";
import { Container } from "reactstrap";
import $ from "jquery";
import NewBtn from "../components/NewBtn/";
import NeonSign from "../components/NeonSign/NeonSign";

function Home() {

    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
            .then((userData) => {
                console.log(userData)
                if (!userData.email) {
                    window.location.replace("/login");
                }
                else {
                    console.log("You're logged in!");
                    cleanupTables()
                }
            })
    }

    init();

    //function clears out any tables with no users or that haven't been updated recently
    function cleanupTables() {
        $.post("api/cleanup").then(function () {
            console.log("table cleanup complete");
            getTables();
        })
    }

    //get the gaming tables that already exist and display them
    function getTables() {
        $.get("api/tables", function (curTables) {

            for (let i = 0; i < curTables.length; i++) {
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
                    table: curTables[i]._id,
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
        });
    }

    //function lets user join an existing table
    function joinTable() {
        let tableId = $(this).attr("table")
        let openSeat = ""
        $.get("/api/table/" + tableId).then(function (tableData) {
            console.log("table data", tableData)
            //make sure there's room at the table
            if (tableData.user1 === "Open Seat") {
                openSeat = "user1";
            } else if (tableData.user2 === "Open Seat") {
                openSeat = "user2";
            } else if (tableData.user3 === "Open Seat") {
                openSeat = "user3";
            } else if (tableData.user4 === "Open Seat") {
                openSeat = "user4";
            } else if (tableData.user5 === "Open Seat") {
                openSeat = "user5";
            } else {
                //if the table is full refresh the page, it shouldn't show up as available anymore
                window.location.reload();
                return
            }
            $.get("/api/user_data", function (userData) {
                let tableUpdate = {
                    column: openSeat,
                    data: userData.email
                }
                //update the table with the new user
                $.post("/api/table/" + tableId, tableUpdate).then(function () {
                    window.location.assign("/casino/" + tableId);
                })
            })
        })
    }

    // Create a new gaming table on click
    function createTable() {
        console.log("Making a new gaming table ");
        //create a new gaming table
        $.post("/api/newtable")
            .then(function (newTable) {
                window.location.assign("/casino/" + newTable._id);
            })
    }

    return (
        <div>
            <Container id="homebody">
                <NeonSign />
                <div className="contianer" id="enterance">
                    <div className="col=md-4" id="current-tables0"></div>
                    <div className="col=md-4" id="current-tables1"></div>
                    <div className="col=md-4" id="current-tables2"></div>
                </div>
                <NewBtn onClick={createTable} />
            </Container>
        </div>
    )
};

export default Home;
