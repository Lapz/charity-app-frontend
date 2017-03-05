import React, {Component} from 'react';

class SaveButton extends Component {
    render() {
        return (
            <div>
                <button className="button is-info" onClick={this.handleClick}>Save a post
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