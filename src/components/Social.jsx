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
                                <Card.Title>
                                    <a href="https://raznar.xyz">Raznar Hosting</a>
                                </Card.Title>
                                <Card.Text>
                                Cheapest Game Hosting in the world!, starting at 0.8$ / GB Month (Shared Hosting), fast-response, secure & realible hosting with powerful anti-ddos.
                                Game Hosting termurah di dunia!, Mulai dari Rp12.000,00  / GB Bulan (Hosting Bersama), respon cepat, hosting yang aman & handal dengan anti-ddos yang kuat.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Added on 30/10/2020</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </section>
            </div>
        )
    }
}