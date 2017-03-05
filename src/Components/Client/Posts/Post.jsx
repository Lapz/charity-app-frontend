import React, {Component} from 'react';
import axios from "axios";

import PreviousButton from "./PreviousButton.jsx"
class Post extends Component {
    constructor() {
        super()
        this.state = {
            body: {},
            title: ""
        }
    }
    render() {
        return ((this.state.body.__html)
            ? (

                <div className="columns">
                    <div className="column is-5 is-offset-one-quarter">
                        <div className="content">
                            <h1>{this.state.title}</h1>
                            {/*<PreviousButton/>*/}

                            <div dangerouslySetInnerHTML={this.state.body}></div>
                        </div>
                    </div>
                </div>
            )
            : (null));
    }

    componentDidMount() {
        console.log(this.props.params.post_id)
        axios
            .get(`posts/${this.props.params.post_id}`)
            .then((response) => {
                console.log(response)

                this.setState({
                    body: {
                        __html: response.data.html
                    },
                    title: response.data.title
                })
            })
    }

}

export default Post; //dangerouslySetInnerHTML={this.state.body