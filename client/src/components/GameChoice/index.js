import React, { useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";
import RPSTable from "../RPSTable";

function GamingTable() {
    const [formDisplay, setFormDisplay] = useState(true);

    const [displayGame, setDisplayGame] = useState();

    const [multi, setMulti] = useState(false);
    const [single, setSingle] = useState(false);

    const [players, setPlayers] = useState();


    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setFormDisplay(false);
    //     if(this.state.value === "blackjackGame") {
    //         setDisplayGame("blackjack");
    //     }
    //     else if(this.state.vale === "rpsGame") {
    //         setDisplayGame("rps");
    //     }
    // }

    function blackjack() {
        setFormDisplay(false);
        setDisplayGame("blackjack");
    }

    function rps() {
        setFormDisplay(false);
        setDisplayGame("rps");
    }

    function werewolf() {
        setFormDisplay(false);
        setDisplayGame("werewolf");
    }

    function twoPlayers() {
        setPlayers("two")
    }
    function threePlusPlayers() {
        setPlayers("threePlus")
    }

    function ifMulti() {
        setMulti(true);
        setSingle(false);
    }



    function ifSingle() {
        setSingle(true);
        setMulti(false);
    }


    return (
        <Container className="text-center">
            {formDisplay
            &&
            <Card className="text-center mx-auto gameChoice">
                <CardTitle tag="h3">Game Mode</CardTitle>
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
                    <CardTitle tag="h3">Choose a game</CardTitle>
                    }
                    {single
                    && <Button color="danger" onClick={blackjack}>Blackjack</Button>
                    }

                    {multi 
                    &&
                    <CardTitle tag="h3">How many players?</CardTitle>
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
                    <CardTitle tag="h3">Choose a game</CardTitle>
                    }

                    {players === "two"
                        &&
                        <Button color="danger" onClick={rps}>Rock Paper Scissors</Button>
                        }
                            {players === "threePlus"
                            && <Button color="danger" onClick={werewolf}>Werewolf</Button>
                            }
                </Form>
            </Card>
            }
            {displayGame === "blackjack"
            && <BlackjackTable />}
            {displayGame === "rps"
            && <RPSTable />}
            {displayGame === "werewolf"
            && <p>werewolf game will go here</p>}
        </Container>
    );
}

export default GamingTable;