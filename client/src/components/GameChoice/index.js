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
                    {multi 
                    &&
                    <CardTitle tag="h3">Choose a game</CardTitle>}
                    {single
                    &&
                    <CardTitle tag="h3">Choose a game</CardTitle>}
                    {/* <CardTitle tag="h3">Choose a game</CardTitle> */}
                    {/* <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" value={this.state.value} 
                        // onChange="this.form.submit" 
                        name="select" id="exampleSelect">
                            {
                                multi
                                && <option
                                value="rpsGame"
                                >Rock Paper Scissors</option>
                                }
                            {
                                single
                                && <option
                                value="blackjackGame"
                                >Blackjack</option>
                                }
                        </Input>
                    </FormGroup> */}

                    {multi
                        &&
                        <Button color="danger" onClick={rps}>Rock Paper Scissors</Button>
                        }
                        {single
                            && <Button color="danger" onClick={blackjack}>Blackjack</Button>
                            }
                </Form>
                {/* options: hard coded blackjack for now */}
            </Card>
            }
            {displayGame === "blackjack"
            && <BlackjackTable />}

            {displayGame === "rps"
            && <RPSTable />}

        </Container>





    );
}

export default GamingTable;