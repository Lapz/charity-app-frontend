import React, {Component} from 'react';

class ContactButton extends Component {
    render() {
        return (

            <div className="control">
                <p className="control">
                    <button onClick={this.props.handleClick} className="button is-primary">{this.props.buttonText}</button>
                </p>

            </div>

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