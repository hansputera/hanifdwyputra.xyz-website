import React from "react";
import { Image } from "@chakra-ui/core";

import "bootswatch/dist/flatly/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

import { Nav, Navbar } from "react-bootstrap";

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">
                    <Image size="50px" src="./logo192.png" alt="Hanif Dwy Putra S" rounded="full" /> Website
                </Navbar.Brand>
                <Navbar.Toggle data-target="#navbarContext" aria-controls="navbarContext" aria-expanded="false" aria-label="toggle"></Navbar.Toggle>
                <Nav className="collapse navbar-collapse mr-auto" id="navbarContext">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/time">Your Time</Nav.Link>
                </Nav>
            </Navbar>
            </>
        )
    }
}