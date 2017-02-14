import React, {Component} from 'react';

class SaveButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Save a post
                </button>
            </div>
        );
    }

    handleClick = () => {
        this
            .props
            .getEditorContent()
    }
}

export default SaveButton;