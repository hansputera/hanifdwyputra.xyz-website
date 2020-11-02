import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default class Error extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <Box className="text-center">
                <h1>How you can find this path?</h1>
                <p className="lead">Go <Link to="/">back</Link></p>
            </Box>
        )
    }
}