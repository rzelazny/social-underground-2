import React from "react";
import "./style.css"
import { Container, Card, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackTable from "../BlackjackTable";

function GamingTable() {
    return (
        <Container id="gameChoice" className="text-center">
            <Card className="text-center mx-auto">
            <CardTitle>Game Choice Component</CardTitle>
            {/* options: hard coded blackjack for now */}
            </Card>
            <BlackjackTable />
        </Container>
    );
}

export default GamingTable;