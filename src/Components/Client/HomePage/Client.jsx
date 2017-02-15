import React, {Component} from 'react';
import NavBar from "../NavBar/NavBar.jsx"
import Footer from "./Footer.jsx";
import "./css/header.css";
import "./css/content.css";

class Client extends Component {
    render() {
        return (
            <div>

                <NavBar/>

                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Client;