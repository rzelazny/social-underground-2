import React, { useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";
import RPSTable from "../RPSTable";

function GamingTable() {
    const [formDisplay, setFormDisplay] = useState(true);

    const [displayBlackjackGame, setDisplayBlackjackGame] = useState(false);
    const [displayRpsGame, setDisplayRpsGame] = useState(false);


    const [multi, setMulti] = useState(false);
    const [single, setSingle] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        setFormDisplay(false);
        if("blackjackGame") {
            setDisplayBlackjackGame(true);
            setDisplayRpsGame(false);
        }
        else if("rpsGame") {
            setDisplayRpsGame(true);
            setDisplayBlackjackGame(false);
        }
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
                <Form 
                onSubmit={handleSubmit}
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
                    <CardTitle tag="h3">Choose a game</CardTitle>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" onChange="this.form.submit" name="select" id="exampleSelect">
                            {
                                multi
                                && <option
                                value={"rpsGame"}
                                >Rock Paper Scissors</option>
                                }
                            {
                                single
                                && <option
                                value={"blackjackGame"}
                                >Blackjack</option>
                                }
                        </Input>
                    </FormGroup>
                    <Button type="submit">Start Playing</Button>
                </Form>
                {/* options: hard coded blackjack for now */}
            </Card>
            }
            {displayBlackjackGame
            && <BlackjackTable />}
            {displayRpsGame
            && <RPSTable />}
        </Container>





    );
}

export default GamingTable;