import React, {Component} from 'react';
import EditEditor from './EditEditor.jsx';

class EditPost extends Component {

    constructor() {
        super()
        this.state = {
            savedState: {}
        }
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">

                    <h1 className="title">
                        Edit a post
                    </h1>
                    <EditEditor
                        savedState
                        ={this.state.savedState}
                        post_id
                        ={this.props.params.post_id}
                        post_title={this.state.title}/>
                </div>
            </div>
        );
    }

}

export default EditPost;