import React, { Component } from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import InlineStyleControls from './InlineStyleControls.jsx';
import BlockStyleControls from './BlockStyleControls.jsx';
import SaveButton from './SaveButton.jsx';
import './css/Editor.css';



function getBlockStyle (block) {
    switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
}
const styleMap = {
        CODE: {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 16,
          padding: 2,
        },
      };


class PostEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
         
   
    }
    
    render() {

         const {editorState} = this.state;

          // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
          let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }

        return (
            <div className="wrapper">
            <div className="RichEditor-root">
              <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType}/>

              <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle}/>
              <div className={className} onClick={this.focus}>

                <Editor blockStyleFn={getBlockStyle} customStyleMap={styleMap} editorState={editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} onTab={this.onTab} placeholder="Write a post" ref="editor" spellCheck={true} />
              </div>
            </div>

            <SaveButton getData={this.convertTextToSave(this.state.editorState)}/>
            </div>
        );
    }

    onChange = (editorState) =>{
        this.setState({
            editorState
        })
    }

    focus = () =>{
        this.refs.editor.focus()
    }

    handleKeyCommand = (command) =>{
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState,command);
    
        if(newState) {
            this.onChange(newState);
            return true;
        }

        return false;
    }

    onTab = (e) => {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e,this.state.editorState,maxDepth));
    }

    toggleBlockType = (blockType) =>{
        this.onChange(RichUtils.toggleBlockType(this.state.editorState,blockType));
    }

    toggleInlineStyle = (inlineStyle) =>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,inlineStyle))
    }

    convertTextToSave = (data) => {
       data
    }
}

export default PostEditor;