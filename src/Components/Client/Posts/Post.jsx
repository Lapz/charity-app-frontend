import React, {Component} from 'react';
import axios from "axios";
import "./css/post-content.css";
import "./css/loader.css"
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
                <div className="post-content-wrapper">
                    <h1>{this.state.title}</h1>
                    {/*<PreviousButton/>*/}

                    <div className="post-content" dangerouslySetInnerHTML={this.state.body}></div>
                </div>
            )
            : (
                <div className=" post-loading loader">
                    <div className="line-scale-party">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ));
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