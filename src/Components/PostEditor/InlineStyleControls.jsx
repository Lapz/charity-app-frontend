import React, { Component } from 'react';
import StyleButton from './StyleButton.jsx';

const INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'},
      ];

class InlineStyleControls extends Component {
    constructor(props){
        super(props)
    }
    render() {

         let currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (
            <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={this.props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
    }
}

export default InlineStyleControls;