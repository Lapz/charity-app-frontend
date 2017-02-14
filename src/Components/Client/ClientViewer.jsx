import React, {Component} from 'react';
import axios from 'react';
class ClientViewer extends Component {
    constructor() {
        super()
        this.state = {
            content: ""
        }
    }

    render() {
        return ((this.state.content.length > 1)
            ? (
                <div className="wrapper" dangerouslySetInnerHTML={this.state.content}></div>

            )
            : (
                <div className="wrapper">
                    loading....
                </div>
            ));
    }

    componentDidMount() {
        // axios.get
    }

}

export default ClientViewer;