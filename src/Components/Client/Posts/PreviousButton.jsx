import React, {Component} from 'react';
import {browserHistory} from "react-router";

class PreviousButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.goBack}>Go back
                </button>
            </div>
        );
    }

    goBack = () => {
        browserHistory.goBack()
    }

}

export default PreviousButton;