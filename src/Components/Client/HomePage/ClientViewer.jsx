import React, {Component} from 'react';
import axios from 'axios';
import PostInfo from './PostInfo';

const removeMd = require("remove-markdown");

const marked = require("marked");

const summaryTool = require("node-summary");

class ClientViewer extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    render() {
        return (

            <div className="columns">
                <div className="column is-half is-offset-one-quarter">

                    {/*<h1>
                    Created Posts
                </h1>*/}
                    <section id="blocks">

                        {(this.state.posts.length > 0)
                            ? (this.state.posts.map((postItem, index) => {

                                let postItemSummary = null || removeMd(postItem.body)

                                summaryTool.summarize(postItem.title, postItemSummary, (err, summary) => {
                                    if (err) {
                                        console.log("Error");
                                    }

                                    postItemSummary = summary
                                })

                                return (<PostInfo
                                    title={postItem.title}
                                    postSummary={postItemSummary}
                                    body
                                    ={postItem.html}
                                    id={postItem._id}
                                    key={index}/>)
                            }))

                            : <div className="columuns">
                                <div className="column is-half is-offset-one-quarter">

                                    Loading ...
                                </div>
                            </div>}

                    </section>
                </div>
            </div>

        );
    }

    componentDidMount() {
        axios
            .get("posts/")
            .then((response) => {
                console.log(response)
                this.setState({posts: response.data})
            })
    }

}

export default ClientViewer;