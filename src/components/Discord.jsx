import React from "react";
import { Redirect } from "react-router-dom";

/* 
* TESTING REDIRECT
*/

export default class Discord extends React.Component {
    constructor() {
        super();

        this.state = { willRedirectIn: 10 };
    }

    render() {
        let first = (
            <pre>You will be redirected to discord page in 10 seconds...</pre>
        );
    setInterval(() => {
        if (!this.state.willRedirectIn) {
            first = (
                <Redirect to="https://surabayajs.org/discord"></Redirect>
            );
        } else {
        this.setState({
            willRedirectIn: this.state.willRedirectIn - 1
        });
        first = (
            <pre>You will be redirected to discord page in {this.state.willRedirectIn} seconds...</pre>
        );
    }
    }, 1000);

    return first;
    }
}