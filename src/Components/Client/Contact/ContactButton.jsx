import React, {Component} from 'react';

class ContactButton extends Component {
    render() {
        return (

            <p className="control">
                <button onSubmit={this.props.handleClick} className="button is-primary">{this.props.buttonText}</button>
            </p>
        );
    }

    handleClick = (e) => {
        e.preventDefault()
        this
            .props
            .handleSumbit()
    }
}

export default ContactButton;