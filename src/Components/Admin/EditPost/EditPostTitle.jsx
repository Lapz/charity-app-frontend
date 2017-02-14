import React, {Component} from 'react';

class EditPostTitle extends Component {
    render() {
        return (
            <div>
                <input
                    value={this.props.value}
                    onChange={this.props.handleTitleChange}
                    placeholder={this.props.titleValuse || "Enter a title"}/>
            </div>
        );
    }

}

export default EditPostTitle;