import React, {Component} from 'react';

class EditPostTitle extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.title} onChange={this.handleChange}/>
            </div>
        );
    }

    handleChange = (e) => {

        this
            .props
            .changeTitle(e.target.value)

    }

}

export default EditPostTitle;