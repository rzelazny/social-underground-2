import React, { useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";

function GamingTable() {
    const [formDisplay, setFormDisplay] = useState(true);
    const [blackjackGame, setBlackjackGame] = useState(false);
    const [rpsGame, setRpsGame] = useState(false);

    const [multi, setMulti] = useState(false);
    const [single, setSingle] = useState(false);


    function onStartPlaying() {
        setFormDisplay(false);
        setBlackjackGame(true);
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
            <Card id="gameChoice" className="text-center mx-auto">
                <CardTitle tag="h3">Game Mode</CardTitle>
                <Form>
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
                    <CardTitle tag="h3">Choose a game</CardTitle>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            {
                                multi
                                && <option>Rock Paper Scissors</option>
                                }
                            {
                                single
                                && <option>Blackjack</option>
                                }
                        </Input>
                    </FormGroup>
                    <Button onClick={onStartPlaying}>Start Playing</Button>
                </Form>
                {/* options: hard coded blackjack for now */}
            </Card>
            }
            {blackjackGame
            && <BlackjackTable />}
        </Container>





    );
}

export default GamingTable;