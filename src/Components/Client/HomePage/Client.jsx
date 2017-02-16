import React, {Component} from 'react';
import NavBar from "../NavBar/ClientNavBar.jsx"
import Footer from "./Footer.jsx";

class Client extends Component {
    render() {
        return (
            <div>

                <NavBar/> {this.props.children}

                <Footer/>
            </div>
        );
    }
}

export default Client;