import React, {Component} from 'react';

import Notification from "../SharedComponent/Notification.jsx";
import SaveButton from "./SaveButton.jsx";
import PostTitle from "./PostTitle.jsx";

import axios from "axios";
const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");

marked.setOptions({sanitize: true})

class PostEditor extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Write a post",
            title: "",
            saved: false
        }
    }
    render() {
        return (
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <h1 className="title">
                        Add a post
                    </h1>

                    {this.state.saved === true
                        ? (<Notification closeNoti={this.closeNoti} message="Post was created"/>)
                        : null
}
                    <PostTitle changeTitleState={this.changeTitle}/>
                    <SimpleMDE value={this.state.textValue} onChange={this.handleChange}/>
                    <SaveButton getEditorContent={this.convertMDToHtml}/>
                </div>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({textValue: value})
    }

    convertMDToHtml = () => {
        console.log(this.state.textValue)

        console.log(JSON.stringify(marked(this.state.textValue)))

        axios
            .post("api/posts", {
            title: this.state.title,
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
            .then((response) => {
                if (response.data.message == "Post created") {
                    this.setState({saved: true})
                }
            })
    }
    changeTitle = (value) => {
        this.setState({title: value})
    }

    closeNoti = () => {
        this.setState({saved: false})
    }
}

export default PostEditor;