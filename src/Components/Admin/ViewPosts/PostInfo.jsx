import React, {Component} from 'react';
import {Link} from 'react-router';

class PostInfo extends Component {
    render() {
        return (

            <div className="box">
                <Link to={"/admin/edit/" + this.props.id}>
                    <h1>{this.props.title}</h1>
                </Link>
                {this.props.postSummary}
            </div>

        );
    }
}

export default PostInfo;