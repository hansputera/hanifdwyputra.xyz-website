import React from "react";

// Library CSS
import "bootswatch/dist/flatly/bootstrap.min.css";
import "bootswatch/dist/superhero/bootstrap.min.css";

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="jumbotron">
                <p className="lead">HI</p>
            </div>
        )
    }
}