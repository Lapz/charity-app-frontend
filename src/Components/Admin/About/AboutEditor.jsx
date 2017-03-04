import React, {Component} from 'react';
import axios from "axios";

import SaveButton from "./SaveButton.jsx";
import Notification from "../SharedComponent/Notification.jsx";

const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");
marked.setOptions({sanitize: true})

class AboutEditor extends Component {

    constructor() {
        super()
        this.state = {
            textValue: "Write a post",
            saved: false
        }
    }

    componentDidMount() {
        axios
            .get(`api/about/`)
            .then((response) => {
                console.log(response)

                this.setState({textValue: response.data.body})
            })
    }
    render() {
        return (
            <div>

                {this.state.saved === true
                    ? (<Notification closeNoti={this.closeNoti} message="About was updated"/>)
                    : null
}

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
        console.log(this.state.textValue)

        console.log(JSON.stringify(marked(this.state.textValue)))

        axios
            .put("api/about", {
            title: "About",
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
            .then((response) => {
                if (response.data.message == "About Updated") {
                    this.setState({saved: true})
                }
            })
    }

}

export default AboutEditor;