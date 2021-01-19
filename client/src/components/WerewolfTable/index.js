import React, { useState } from "react";
import "./style.css"
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WerewolfGame3 from "../WerewolfGame3";

var players = 0;

function WerewolfTable() {

    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState();

    function three() {
        players = 3;
        console.log("Amount of players: ", players);
    }

    function four() {
        players = 4;
        console.log(players);
    }

    function five() {
        players = 5;
        console.log(players);
    }

    function six() {
        players = 6;
        console.log(players);
    }

    function seven() {
        players = 7;
        console.log(players);
    }

    function onStart() {
        console.log("clicking start btn");
        setStartGame(players);
        setDisplayDirections(false);
        console.log(players);
    }

    return (
        <Container id="werewolfTable">
            <h2>Beast</h2>
            <br />
            {displayDirections
                &&
                <div id="directions">
                    <p>some basic instructions will go here - our spin on werewolf</p>
                    <Form>
                        <h4>How many players?</h4>
                        <FormGroup tag="fieldset">
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="3"
                                        onClick={three}
                                    />{' '}
                                            3
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="4"
                                        onClick={four}
                                        disabled
                                    />{' '}
                                            4
                                        </Label>
                            </FormGroup >
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="5"
                                        onClick={five}
                                        disabled
                                    />{' '}
                                            5
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check >
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="6"
                                        onClick={six}
                                        disabled
                                    />{' '}
                                            6
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="7"
                                        onClick={seven}
                                        disabled
                                    />{' '}
                                            7
                                        </Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                    <Button color="danger" onClick={onStart}>Start</Button>
                </div>
            }
            {startGame === 3
                &&
                <WerewolfGame3 />
            }
        </Container>
    )
}

export default WerewolfTable;