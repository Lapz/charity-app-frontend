import React, {Component} from 'react';
import axios from "axios";

import ContactField from "./ContactField";
import ContactButton from "./ContactButton";
import ContactTextArea from "./ContactTextArea";

class Contact extends Component {

    constructor() {
        super()

        this.state = {}
    }
    render() {
        return (

            <div className="columns">
                <div className="column is-half is-offset-one-quarter">

                    <form onSubmit={this.handleSumbit}>

                        <ContactField
                            identifier="Name"
                            labelName="Name"
                            placeholder="John AppleSeed"
                            handleFieldChange={this.handleFieldChange}/>

                        <ContactField
                            identifier="Email"
                            labelName="Email"
                            placeholder="JohnAppleSeed@example.com"
                            handleFieldChange={this.handleFieldChange}/>

                        <ContactTextArea
                            identifier="Message"
                            labelName="Message"
                            handleTextAreaChange={this.handleTextAreaChange}
                            placeholder="Enter your message"/>

                        <ContactButton buttonText="Submit" handleSumbit={this.handelSubmit}/>

                    </form>
                </div>
            </div>

        );
    }

    handleFieldChange = (value, fieldID) => {
        console.log(value, fieldID)

        const obj = this.state;

        const newState = Object.assign({}, obj, {[fieldID]: value})

        this.setState(newState)
    }

    handleSumbit = (e) => {
        e.preventDefault()

        axios
            .post("contact", {
            author: this.state.Name,
            email: this.state.Email

        })
            .then((response) => {
                console.log(response)

                if (response.data.success === true) {
                    //trigerr model
                } else {
                    // trigerr errorModel
                }
            })
    }

    handleTextAreaChange = (value, fieldID) => {
        const obj = this.state;
        const newState = Object.assign({}, obj, {[fieldID]: value})
        this.setState(newState)
    }

}

// bulma()(Contact)
export default Contact;