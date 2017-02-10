import React, {Component} from 'react';
import EditEditor from './EditEditor.jsx';
import axios from 'axios';
import {convertFromRaw, EditorState} from 'draft-js';
class EditPost extends Component {

    constructor() {
        super()
        this.state = {
            savedState: ""
        }
    }

    render() {
        return (
            <div>

                <EditEditor savedState={this.state.savedState}/>

                
            </div>
        );
    }
    componentDidMount() {

        const post_id = this.props.params.post_id;

        console.log(post_id)
        axios
            .get(`http://localhost:3001/api/posts/${post_id}`)
            .then((response) => {
                console.log(response)

                 const newSavedState = EditorState.createWithContent(convertFromRaw(JSON.parse(response.data.body)))

                 console.log(newSavedState)

                 this.setState({
                     savedState: newSavedState,
                     title:response.data.title
                 })

            })
    }

}

export default EditPost;