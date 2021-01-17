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
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                {/* options: hard coded blackjack for now */}
            </Card>
            <BlackjackTable />
        </Container>





    );
}

export default GamingTable;