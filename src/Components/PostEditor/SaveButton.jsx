import React, { Component } from 'react';

class SaveButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }

   handleSave = () =>{
        this.props.handleSave()
    }
}

export default SaveButton;