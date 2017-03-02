import React, {Component} from 'react';

class ContactTextArea extends Component {
    render() {
        return (
            <div>
                <label className="label">{this.props.labelName}</label>
                <p className="control">
                    <textarea
                        className="textarea"
                        ref={`${this.props.labelName}`}
                        onChange={this.handleChange}
                        placeholder={this.props.placeholder}></textarea>
                </p>
            </div>
        );
    }

    handleChange = () => {
        let ref = this.props.labelName
        this
            .props
            .handleTextAreaChange(this.refs[ref].value, this.props.identifier)
    }
}

export default ContactTextArea;