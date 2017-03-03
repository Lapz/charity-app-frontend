import React, {Component} from 'react';

class ContactField extends Component {
    render() {
        return (
            <div>
                <label className="label">{this.props.labelName}</label>
                <p className="control">
                    <input
                        type={`${this.props.type}` || "text"}
                        ref={`${this.props.labelName}`}
                        className="input"
                        onChange={this.handleChange}
                        placeholder={this.props.placeholder || "John AppleSeed"}/>

                </p>
            </div>
        );
    }

    handleChange = () => {
        let ref = this.props.labelName;

        // console.log(this.refs[ref].value)
        this
            .props
            .handleFieldChange(this.refs[ref].value, this.props.identifier)
    }
}

export default ContactField;