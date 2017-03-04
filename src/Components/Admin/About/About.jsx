import React, {Component} from 'react';
import AboutEditor from "./AboutEditor.jsx";

class About extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <h1 className="title">
                        Edit the about section
                    </h1>
                    <AboutEditor/>
                </div>
            </div>
        );
    }
}

export default About;