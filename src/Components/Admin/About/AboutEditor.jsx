import React, {Component} from 'react';
// import "./css/Editor.css"
import SaveButton from "./SaveButton.jsx";
import axios from "axios";

const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");

marked.setOptions({sanitize: true})

class AboutEditor extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Write a post",
            title: ""
        }
    }

    componentDidMount() {
        axios
            .get(`api/about/`)
            .then((response) => {
                console.log(response)

                this.setState({savedState: response.data.body})
            })
    }
    render() {
        return (
            <div className="wrapper">
                {/*<PostTitle changeTitleState={this.changeTitle}/>*/}
                <SimpleMDE
                    value={this.state.savedState || this.state.textValue}
                    onChange={this.handleChange}/>
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

        axios.put("api/about", {
            title: "About",
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
    }
    changeTitle = (value) => {
        this.setState({title: value})
    }
}

export default AboutEditor;