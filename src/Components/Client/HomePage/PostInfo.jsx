import React, {Component} from 'react';
import {Link} from 'react-router';

class PostInfo extends Component {
    render() {
        return (

            <div className="homepage-box">
                <article>

                    <h1>
                        <Link to={"/post/" + this.props.id}>
                            {this.props.title}
                        </Link>
                    </h1>

                    <div>
                        <p>{this.props.postSummary}</p>
                    </div>
                </article>
            </div>
        );
    }
}

export default PostInfo;