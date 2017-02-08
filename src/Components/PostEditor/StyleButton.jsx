import React, { Component } from 'react';

class StyleButton extends Component {
    
    constructor() {
        super()
        
    }
    
    render() {

        let className = 'RichEditor-styleButton';

        if(this.props.active){
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        );
    }

    onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style)
    }
}

export default StyleButton;