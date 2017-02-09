import React, {Component} from 'react';

class PostTitle extends Component {
    render() {
        return (
            <div>
                <input  ref="titleText" onChange={this.handleInput} placeholder="Enter  a title"/>
            </div>
        );
    }

    handleInput= () => {
        this.props.changeTitleState(this.refs.titleText.value)
    }
}

export default PostTitle;