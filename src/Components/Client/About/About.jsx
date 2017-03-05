import React, {Component} from 'react';

import axios from "axios"
class About extends Component {
    constructor() {
        super()
        this.state = {
            body: {}
        }
    }
    render() {

        return ((this.state.body.__html)
            ? (

                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="content">
                            <h1>{this.state.title}</h1>
                            {/*<PreviousButton/>*/}

                            <div dangerouslySetInnerHTML={this.state.body}></div>
                        </div>
                    </div>
                </div>
            )
            : (
                <div className="columuns">
                    <div className="column is-half is-offset-one-quarter">

                        Loading ...
                    </div>
                </div>
            ));
    }

    componentDidMount() {
        axios
            .get("about")
            .then((response) => {
                console.log(response)

                this.setState({
                    body: {
                        __html: response.data.html
                    }

                })
            })
    }

}

export default About;