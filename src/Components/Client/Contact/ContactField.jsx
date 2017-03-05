import React, {Component} from 'react';

class EmailField extends Component {
    render() {
        return (
            <div>
                <label className="label">{this.props.labelName}</label>
                <p className="control">
                    <input
                        ref={`${this.props.labelName}`}
                        className="input"
                        onChange={this.handleChange}
                        type="text"
                        placeholder={this.props.placeholder || "John AppleSeed"}/>

                </p>
            </div>
        );
    }

    handleChange = () => {
        let ref = this.props.labelName;

        console.log(ref)

        // console.log(this.refs[ref].value)
        this
            .props
            .handleFieldChange(this.refs[ref].value, this.props.identifier)
    }
}

export default EmailField;