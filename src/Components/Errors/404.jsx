import React, {Component} from 'react';

import "./css/404.css"
class Error404 extends Component {
    render() {
        return (
            <div className="container">
                <div id="green" className="rgb"></div>
                <div id="red" className="rgb"></div>
                <div id="blue" className="rgb"></div>
                <h1>404</h1>
                <p>This means nothing was found. Are you lost?</p>
            </div>
        );
    }
}

export default Error404;