import React, {Component} from 'react';
import NormalLogin from './NormalLogin.jsx';

import EmailField from "./EmailField.jsx";
import EmailButton from "./EmailButton.jsx";
import ErrorModal from './ErrorModal.jsx';
import {browserHistory} from 'react-router';
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    render() {
        return (

            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    {(this.state.error === true)
                        ? (<ErrorModal
                            modalClosedButtonPressed={this.modalClosedButtonPressed}
                            errorMessage={this.state.errorMessage}/>)
                        : null}

                    <form onSubmit={this.login}>

                        <EmailField
                            identifier="Email"
                            placeholder="JohnAppleSeed@example.com"
                            labelName="Email"/>

                        <EmailField identifier="Password" labelName="Password" placeholder="******"/>

                        <EmailButton buttonText="Login"/>
                    </form>

                </div>
            </div>
        );
    }

    modalClosedButtonPressed = () => {
        this.setState({error: false})
    }

    errorModalTrigger = (errorMessage) => {
        this.setState({error: true, errorMessage: errorMessage})
    }

    onReceiveToken = (token) => {
        console.log(token + "    2")

        this.passUpToken(token)
    }

    login = (e) => {
        e.preventDefault()
        const email = this.refs.Email.value;
        const pass = this.refs.Password.value;

        axios
            .post("auth/authenticate", {
            username: email,
            password: pass
        })
            .then((response) => {
                if (response.data.success == true) {
                    this.passUpJWT(response.data.token)
                    browserHistory.push("admin/add")
                } else {
                    // console.log(response)
                    this.errorModalTrigger(response.data.msg)
                }

            })
            .catch((err) => {

                console.log(err)
                this.errorModalTrigger(e.message)
            })
    }

    passUpJWT = (token) => {
        this.onReceiveToken(token)
    }
}

export default Login;