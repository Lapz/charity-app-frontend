import React, {Component} from 'react';
import axios from 'axios';
import PostInfo from './PostInfo';
import {convertFromRaw} from 'draft-js';
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

                        const postItemSummary = convertFromRaw(JSON.parse(postItem.body))
                            .getFirstBlock()
                            .getText()

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
            .get("http://localhost:3001/api/posts")
            .then((response) => {
                console.log(response)

                this.setState({posts: response.data})
            })
    }

}

export default ViewPost;