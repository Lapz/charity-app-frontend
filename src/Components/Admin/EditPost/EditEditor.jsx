import React, {Component} from 'react';
import SaveButton from "./SaveButton.jsx";
import axios from "axios";
import EditPostTitle from "./EditPostTitle.jsx"
const SimpleMDE = require("react-simplemde-editor");
const marked = require("marked");

marked.setOptions({sanitize: true})

class EditEditor extends Component {

    constructor() {
        super()
        this.state = {

            title: "",
            savedState: ""
        }
    }

    componentDidMount() {
        axios
            .get(`api/posts/${this.props.post_id}`)
            .then((response) => {
                console.log(response)

                this.setState({savedState: response.data.body})
            })
    }

    render() {
        return (
            <div>
                <EditPostTitle changeTitleState={this.changeTitle}/>
                <SimpleMDE value={this.state.savedState} onChange={this.handleChange}/>
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

        axios.put(`api/posts/${this.props.post_id}`, {
            title: this.state.title,
            body: this.state.textValue,
            html: marked(this.state.textValue)
        })
    }
    changeTitle = (value) => {
        this.setState({title: value})
    }
}

export default EditEditor;