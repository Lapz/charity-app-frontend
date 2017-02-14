import React, {Component} from 'react';
import NormalLogin from './NormalLogin.jsx';
// import SignUp from'./SignUp.jsx';
import ErrorModal from './ErrorModal.jsx';
import './css/login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    render() {
        return (
            <div className="wrapper login-wrapper">
                {(this.state.error === true)
                    ? (<ErrorModal
                        modalClosedButtonPressed={this.modalClosedButtonPressed}
                        errorMessage={this.state.errorMessage}/>)
                    : null}

                <div className='login'>
                    <NormalLogin
                        onReceiveToken={this.onReceiveToken}
                        errorModalTrigger={this.errorModalTrigger}/>
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

        this
            .props
            .passUpToken(token)
    }
}

export default Login;