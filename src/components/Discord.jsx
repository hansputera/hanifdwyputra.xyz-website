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
            <pre>You will be redirected to discord page in {this.state.willRedirectIn} seconds...</pre>
        );
    setInterval(() => {
        this.setState({
            willRedirectIn: this.state.willRedirectIn - 1
        });
        return first = (
            <pre>You will be redirected to discord page in {this.state.willRedirectIn} seconds...</pre>
        );
    }, 1000);
    if (this.state.willRedirectIn == 0) {
        return <Redirect to="https://surabayajs.org/discord"></Redirect>;
    } else {
         return first;
     }
    }
}