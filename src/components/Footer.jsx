import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <footer className="footer text-center">
                <br />
                Built by <a href="https://reactjs.org">ReactJS</a>
            </footer>
        )
    }
}