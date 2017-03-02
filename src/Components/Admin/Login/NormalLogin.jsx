import React, {Component} from 'react';
// import * as firebase from 'firebase';
import ContactField from "./EmailField.jsx";
import {browserHistory} from 'react-router';
import axios from "axios"
class NormalLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false

        }
    }
    render() {
        return (
            <div className="columns">
                <form onSubmit={this.login}>

                    <ContactField
                        identifier="Email"
                        placeholder="JohnAppleSeed@example.com"
                        lableName="Emai"/>
                    <ContactField lableName="password"/>
                </form>
            </div>
        )
    }

    login = (e) => {
        e.preventDefault()
        const email = this.refs.userEmail.value;
        const pass = this.refs.userPassword.value;

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
                    this
                        .props
                        .errorModalTrigger(response.data.msg)
                }

            })
            .catch((err) => {

                console.log(err)
                this
                    .props
                    .errorModalTrigger(e.message)
            })
    }

    passUpJWT = (token) => {
        this
            .props
            .onReceiveToken(token)
    }
}

export default NormalLogin;