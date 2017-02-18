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
            <div>
                <EditEditor
                    savedState
                    ={this.state.savedState}
                    post_id
                    ={this.props.params.post_id}
                    post_title={this.state.title}/>
            </div>
        );
    }

}

export default EditPost;