import React, {Component} from 'react';
import axios from "axios";

import SaveButton from "./SaveButton.jsx";
import EditPostTitle from "./EditPostTitle.jsx";
import Notification from "../SharedComponent/Notification.jsx";

const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");

marked.setOptions({sanitize: true})

class EditEditor extends Component {

    constructor() {
        super()
        this.state = {
            saved: false,
            title: "",
            textValue: ""
            // savedState: ""
        }
    }

    componentDidMount() {
        axios
            .get(`api/posts/${this.props.post_id}`)
            .then((response) => {
                console.log(response)

                this.setState({textValue: response.data.body, title: response.data.title})
            })
    }

    render() {
        return (
            <div>

                {this.state.saved === true
                    ? (<Notification closeNoti={this.closeNoti} message="Post was updated"/>)
                    : null
}

                <EditPostTitle title={this.state.title} changeTitle={this.changeTitle}/>
                <SimpleMDE value={this.state.textValue} onChange={this.handleChange}/>
                <SaveButton getEditorContent={this.convertMDToHtml}/>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({textValue: value})
    }

    closeNoti = () => {
        this.setState({saved: false})
    }

    convertMDToHtml = () => {

        axios
            .put(`api/posts/${this.props.post_id}`, {
            title: this.state.title,
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
            .then((response) => {
                if (response.data.message == "Post Updated") {
                    this.setState({saved: true})
                }
            })
    }
    changeTitle = (value) => {
        this.setState({title: value})
    }
}

export default EditEditor;