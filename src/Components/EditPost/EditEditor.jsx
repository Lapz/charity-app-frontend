import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, convertFromRaw, convertToRaw} from 'draft-js';
import InlineStyleControls from '../PostEditor/InlineStyleControls.jsx';
import BlockStyleControls from '../PostEditor/BlockStyleControls.jsx';
import SaveButton from '../PostEditor/SaveButton.jsx';
import EditPostTitle from './EditPostTitle.jsx'
import './css/Editor.css';
import axios from 'axios';

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

class EditEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            title: ""
        };

    }

    componentDidMount() {

        axios
            .get(`http://localhost:3001/api/posts/${this.props.post_id}`)
            .then((response) => {
                console.log(response)

                const newSavedState = EditorState.createWithContent(convertFromRaw(JSON.parse(response.data.body)))

                this.setState({editorState: newSavedState, title: response.data.title})

            })

    }

    render() {

        const {editorState} = this.state
        // If the user changes block type before entering any text, we can either style
        // the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';

        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div className="wrapper">

                <EditPostTitle value={this.state.title} handleTitleChange={this.changeTitle}/>
                <div className="RichEditor-root">
                    <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType}/>

                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}/>
                    <div className={className} onClick={this.focus}>

                        <Editor
                            blockStyleFn={getBlockStyle}
                            customStyleMap={styleMap}
                            editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            onTab={this.onTab}
                            ref="editor"
                            spellCheck={true}/>
                    </div>
                </div>

                <SaveButton handleSave={this.onSave}/>
            </div>
        );
    }

    onChange = (editorState) => {
        this.setState({editorState})
    }

    focus = () => {
        this
            .refs
            .editor
            .focus()
    }

    handleKeyCommand = (command) => {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            this.onChange(newState);
            return true;
        }

        return false;
    }

    onTab = (e) => {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    toggleBlockType = (blockType) => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    toggleInlineStyle = (inlineStyle) => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle))
    }

    convertTextToSave = (data) => {

        // console.log('Button clicked ')

        if (data.hasText()) {
            const postTitle = this.state.title
            const postBody = JSON.stringify(convertToRaw(data))

            console.log(data.hasText())
            console.log(convertToRaw(data))

            var editDate = new Date()

            var x = JSON.stringify(editDate);

            console.log(x)

            axios
                .put(`http://localhost:3001/api/posts/${this.props.post_id}`, {
                title: postTitle,
                textBody: postBody,
                editedDate: x

            })
                .then((response) => {
                    console.log(response)
                })
        } else {
            alert("Enter some fucking text");
        }

    }

    onSave = () => {
        this.convertTextToSave(this.state.editorState.getCurrentContent())
    }

    changeTitle = (event) => {
        this.setState({title: event.target.value})
    }

}

export default EditEditor;