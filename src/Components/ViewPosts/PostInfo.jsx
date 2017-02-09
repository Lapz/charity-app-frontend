import React, {Component} from 'react';
import {Link} from 'react-router';

class PostInfo extends Component {
    render() {
        return (
            <div>
                <Link to={"/edit/" + this.props.id}>
                    <h1>{this.props.title}</h1>
                </Link>
                <div className="post-info-body">
                    {this.props.postSummary}
                </div>
            </div>
        );
    }
}

export default PostInfo;