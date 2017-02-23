import React, {Component} from 'react';
import axios from 'axios';
import PostInfo from './PostInfo';
const removeMd = require("remove-markdown")
const marked = require("marked");
class ViewPost extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        }

    }

    render() {
        return (
            <div className="wrapper">

                <h1>
                    Created Posts
                </h1>

                {(this.state.posts)
                    ? (this.state.posts.map((postItem, index) => {

                        const postItemSummary = null || removeMd(postItem.body)

                        return (<PostInfo
                            title={postItem.title}
                            postSummary={postItemSummary}
                            id={postItem._id}key={index}/>)
                    }))
                    : null}
            </div>
        );
    }

    componentDidMount() {
        axios
            .get("api/posts", {withCredentials: true})
            .then((response) => {
                console.log(response)

                this.setState({posts: response.data})
            })
    }

}

export default ViewPost;