import React, {Component} from 'react';
import EmailField from "./EmailField.jsx";
import EmailButton from "./EmailButton.jsx";

// import LoginModal from "./ErrorModal.jsx"

import Modal from "./Modal.jsx";
import {browserHistory} from 'react-router';
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            modalTrigered: false,
            loggedIn: false
        }
    }

    render() {
        return (

            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    {(this.state.modalTrigered === true)
                        ? (
                            <Modal
                                handleClose={this.triggerModal}
                                message={this.state.message}
                                isActive={this.state.modelTrigered}
                                handleClose={this.triggerModal}></Modal>
                        )
                        : null}

                    <form onSubmit={this.login}>

                        <EmailField
                            type="email"
                            identifier="email"
                            placeholder="JohnAppleSeed@example.com"
                            labelName="Email"
                            handleFieldChange={this.handleFieldChange}/>

                        <EmailField
                            type="password"
                            identifier="password"
                            labelName="Password"
                            placeholder="******"
                            handleFieldChange={this.handleFieldChange}/>

                        <EmailButton type="submit" buttonText="Login"/>
                    </form>

                </div>
            </div>
        );
    }

    modalClosedButtonPressed = () => {
        this.setState({error: false})
    }

    triggerModal = (modalMessage) => {

        const modelTrigger = !this.state.modalTrigered;

        this.setState({modalTrigered: modelTrigger, message: modalMessage})
    }

    handleFieldChange = (value, fieldID) => {
        console.log(value, fieldID)

        const obj = this.state;

        const newState = Object.assign({}, obj, {[fieldID]: value})

        this.setState(newState)
    }

    login = (e) => {
        e.preventDefault()

        const email = this.state.email;
        const pass = this.state.password;

        axios
            .post("auth/authenticate", {
            username: email,
            password: pass
        })
            .then((response) => {
                if (response.data.success == true) {
                    this
                        .props
                        .passUpToken(response.data.token)

                    browserHistory.replace("/admin/add")
                } else {
                    // console.log(response)
                    this.triggerModal(response.data.msg)
                }

            })
            .catch((err) => {

                console.log(err)
                this.triggerModal(e.message)
            })

    }

}

export default Login;