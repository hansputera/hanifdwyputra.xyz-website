import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Navbar from "./templates/Navbar";

export default class Social extends React.Component {
    constructor() {
        super();

        this.state = {};
    }
        
    render() {
        return (
            <div className="mr-auto">
                <Navbar></Navbar>
                <div className="jumbotron text-center">
                    <h1>List My Social Media</h1>
                    <p className="lead">Here you can find me on Internet !</p>
                </div>
                <section className="list">
                    <CardGroup>
                        <Card border="red">
                            <Card.Body>
                                <Card.Title><a href="https://instagram.com/hanif.dwy.putra12">Instagram</a></Card.Title>
                                <Card.Text>
                                    Follow saya di instagram dan nikmati sensasinya.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Added on 21/10/2020</small>
                            </Card.Footer>
                        </Card>

                        <Card border="red">
                            <Card.Body>
                                <Card.Title>Discord</Card.Title>
                                <Card.Text>
                                    Dukung <a href="https://surabayajs.org/discord">SurabayaJS</a> dan <a href="https://mathdro.id/discord">Mathdro.ID</a> di discord, serta tambahkan saya di discord <strong>hanifdwypoetra#7343</strong>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Added on 21/10/2020</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </section>
            </div>
        )
    }
}