import React, {Component} from 'react';
import "./css/Editor.css"
import SaveButton from "./SaveButton.jsx";
import axios from "axios";
import PostTitle from "./PostTitle.jsx"
const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");

marked.setOptions({sanitize: true})

class PostEditor extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Write a post",
            title: ""
        }
    }
    render() {
        return (
            <div className="wrapper">
                <PostTitle changeTitleState={this.changeTitle}/>
                <SimpleMDE value={this.state.textValue} onChange={this.handleChange}/>
                <SaveButton getEditorContent={this.convertMDToHtml}/>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({textValue: value})
    }

    convertMDToHtml = () => {
        console.log(this.state.textValue)

        console.log(JSON.stringify(marked(this.state.textValue)))

        axios.post("api/posts", {
            title: this.state.title,
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
    }
    changeTitle = (value) => {
        this.setState({title: value})
    }
}

export default PostEditor;