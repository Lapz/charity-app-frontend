import React, {Component} from 'react';
import {Link} from 'react-router';

class PostInfo extends Component {
    render() {
        return (
            <article>

                <h1>
                    <Link to={"/post/" + this.props.id}>
                        {this.props.title}
                    </Link>
                </h1>

                <div className="post-info-body">
                    <p>{this.props.postSummary}</p>
                </div>
            </article>
        );
    }
}

export default PostInfo;