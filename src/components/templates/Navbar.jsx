import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navbar_TEMPLATE() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Website</Navbar.Brand>
            <Nav className="collapse navbar-collapse mr-auto" id="navbarContent">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/social">Social Media</Nav.Link>
                <Nav.Link href="/discord">Discord</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navbar_TEMPLATE;