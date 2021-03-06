import React, { useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";
import RPSTable from "../RPSTable";
import WerewolfTable from "../WerewolfTable";
import $ from "jquery";


function GamingTable({room, curTable, game}) {

    const [formDisplay, setFormDisplay] = useState(true);
    const [displayGame, setDisplayGame] = useState();

    const [multi, setMulti] = useState(false);
    const [single, setSingle] = useState(false);

    const [players, setPlayers] = useState();

    if (game === "Just Chatting") {
        function ifSingle() {
            setSingle(true);
            setMulti(false);
        }

        function ifMulti() {
            setMulti(true);
            setSingle(false);
        }

        function twoPlayers() {
            setPlayers("two")
        }

        function threePlusPlayers() {
            setPlayers("threePlus")
        }

        function blackjack() {
            setFormDisplay(false);
            setDisplayGame("blackjack");
            // change table name to blackjack
            $.post("/api/blackjack/" + curTable)
            .then((results) => {
                console.log(results)
            })
        }

        function rps() {
            // change table name to rps
            setFormDisplay(false);
            setDisplayGame("rps");
            // change table name to rps
            $.post("/api/rps/" + curTable)
            .then((results) => {
            console.log(results)
            })
        }

        function werewolf() {
            // change table name to werewolf
            setFormDisplay(false);
            setDisplayGame("werewolf");
            // change table name to werewolf
            $.post("/api/beast/" + curTable)
            .then((results) => {
            console.log(results)
            })
        }

        return (
            <Container className="text-center">
                {formDisplay
                    &&
                    <Card className="text-center mx-auto gameChoice">
                        <CardTitle tag="h2">Game Mode</CardTitle>
                        <Form
                        // onSubmit={handleSubmit}
                        >
                            <FormGroup tag="fieldset">
                                <FormGroup check className="form-check-inline">
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="radio1"
                                            onClick={ifMulti}
                                        />{' '}
                                    Multiplayer
                                </Label>
                                </FormGroup>
                                <FormGroup check className="form-check-inline">
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="radio1"
                                            onClick={ifSingle}
                                        />{' '}
                                    Single Player
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <br />

                            {single
                                &&
                                <CardTitle tag="h4">Choose a game:</CardTitle>
                            }
                            {single
                                && <Button color="danger" onClick={blackjack}>Blackjack</Button>
                            }

                            {multi
                                &&
                                <CardTitle tag="h4">How many players?</CardTitle>
                            }
                            {multi
                                &&
                                <Form>
                                    <FormGroup tag="fieldset">
                                        <FormGroup check className="form-check-inline">
                                            <Label check>
                                                <Input
                                                    type="radio"
                                                    name="radio1"
                                                    onClick={twoPlayers}
                                                />{' '}
                                                2
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="form-check-inline">
                                            <Label check>
                                                <Input
                                                    type="radio"
                                                    name="radio1"
                                                    onClick={threePlusPlayers}
                                                />{' '}
                                                3+
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Form>
                            }
                            {players
                                &&
                                <CardTitle tag="h4">Choose a game:</CardTitle>
                            }


                            {players === "two"
                                &&
                                <Button color="danger" onClick={rps}>Rock Paper Scissors</Button>
                            }
                            {players === "threePlus"
                                && <Button color="danger" onClick={werewolf}>Beast</Button>
                            }
                        </Form>
                    </Card>
                }
                {displayGame === "blackjack"
                    && <BlackjackTable />}
                {displayGame === "rps"
                    && <RPSTable room={room}/>}
                {displayGame === "werewolf"
                    && <WerewolfTable room={room} curTable={curTable}/>}
            </Container>
        );
    }

    else if (game === "Blackjack") {
        return (
            <Container>
                <BlackjackTable />
            </Container>
        )
    }
    else if (game === "Rock Paper Scissors") {
        return (
            <Container>
                <RPSTable room={room}/>
            </Container>
        )
    }
    else if (game === "Beast") {
        return (
            <Container>
                <WerewolfTable room={room} curTable={curTable}/>
            </Container>
        )
    }
    else {
        console.log("there is an error placing the game");
        return (
            <p>check console</p>
        )
    }

}

export default GamingTable;