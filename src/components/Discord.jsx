import React from "react";

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
    }, 2000);
    if (this.state.willRedirectIn == 0) {
        {
            window.open("https://discord.gg/p6Csapn"); // Rexar Network...
        }
        first = <Redirect to="/"></Redirect>;
    } else {
         return first;
     }
    }
}