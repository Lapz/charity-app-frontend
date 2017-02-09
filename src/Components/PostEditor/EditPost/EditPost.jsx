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

                return JSON.parse(response.data.body)

            })
            .then((parsedData) => {
                console.log(parsedData)
                const newSavedState = EditorState.createWithContent(convertFromRaw(parsedData))
                console.log(newSavedState)
                this.setState({savedState: newSavedState})
            })
    }

}

export default EditPost;