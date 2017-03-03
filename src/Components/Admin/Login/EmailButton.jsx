import React, {Component} from 'react';

class EmailButton extends Component {
    render() {
        return (

            <p className="control">
                <button
                    type={this.props.type}
                    onSubmit={this.props.handleClick}
                    className="button is-primary">{this.props.buttonText}</button>
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

export default EmailButton;