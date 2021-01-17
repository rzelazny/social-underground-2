import React, { useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";

function GamingTable() {

    const [blackjackGame, setBlackjackGame] = useState(false);
    const [rpsGame, setRpsGame] = useState(false);


    return (
        <Container className="text-center">
            <Card id="gameChoice" className="text-center mx-auto">
                <CardTitle tag="h3">Game Mode</CardTitle>
                <Form>
                    <FormGroup tag="fieldset">
                        <FormGroup check className="form-check-inline">
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Multiplayer
                            </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-inline">
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Single Player
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <br />
                    <CardTitle tag="h3">Choose a game</CardTitle>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </FormGroup>
                    <Button>Start Playing</Button>
                </Form>
                {/* options: hard coded blackjack for now */}
            </Card>
            <BlackjackTable />
        </Container>





    );
}

export default GamingTable;