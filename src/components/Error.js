import React from "react";
import { Link } from "react-router-dom";

// Importing CSS
import "bootswatch/dist/superhero/bootstrap.min.css";

export default class Error extends React.Component {
    constructor() {
        super();
    }
    render() {
        document.title = "404 Not Found Page";
        return (
        <div>
            <div className="jumbotron text-center">
                <h1>404 Not Found</h1>
            </div>
            <div className="message text-center">
                <h2>Could't find your path, go <Link to="/">back</Link></h2>
            </div>
        </div>
        )
    }
}