import React, {Component} from 'react';
import axios from 'axios';
import PostInfo from './PostInfo'
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
                {(this.state.posts)
                    ? (this.state.posts.map((postItem, index) => {
                        return (<PostInfo title={postItem.title} key={index} id={postItem._id}/>)
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