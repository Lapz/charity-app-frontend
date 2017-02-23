import React, {Component} from 'react';
// import * as firebase from 'firebase';
import './css/normalLogin.css';
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
            <div className="container">
                <form className="form-wrapper">
                    <ul className="flex-outer">
                        <li>
                            <label htmlFor="txtEmail">
                                Email</label>
                            <input id="txtEmail" type="email" placeholder="Email" ref="userEmail" required/>
                        </li>

                        <li>
                            <label htmlFor="txtPassword">Password</label>
                            <input
                                id="txtPassword"
                                type="password"
                                placeholder="Password"
                                ref="userPassword"/>
                        </li>

                        <li>
                            <button id="loginBtn" className="login-btn" onClick={this.login}>Login</button>
                        </li>

                        {/* <li>
                <button id="signUpBtn" className="signUp-btn" onClick={this.signup}>Sign Up</button>
            </li>*/}
                    </ul>
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