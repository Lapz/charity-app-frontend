import React, {Component} from 'react';

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

            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter">

                    <form>

                        <ContactField
                            identifier="Name"
                            labelName="Name"
                            placeholder="John ApplesSeed"
                            handleFieldChange={this.handleFieldChange}/>

                        <ContactField
                            identifier="Email"
                            labelName="Email"
                            placeholder="JohnApplesSeed@example.com"
                            handleFieldChange={this.handleFieldChange}/>

                        <ContactTextArea
                            identifier="Message"
                            labelName="Message"
                            handleTextAreaChange={this.handleTextAreaChange}/>

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

    handleSumbit = () => {

        console.log("Clicked");
    }

    handleTextAreaChange = (value, fieldID) => {
        const obj = this.state;
        const newState = Object.assign({}, obj, {[fieldID]: value})
        this.setState(newState)
    }

}

// bulma()(Contact)
export default Contact;