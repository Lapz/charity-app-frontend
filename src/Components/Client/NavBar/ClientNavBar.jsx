import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";
import CloseButton from "./CloseButton.jsx";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClass: "is-active",
            hidden: ""
        }
    }

    render() {
        return (
            <div>
                <nav className="nav">

                    <div className="nav-left">
                        <a className="nav-item">
                            Doctors in Diaspora
                        </a>
                    </div>

                    <span onClick={this.changeClass} className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                    <div className={`nav-right nav-menu ${this.state.activeClass}`}>

                        <Link className="nav-item" to="/">Homepage</Link>

                        <Link className="nav-item" to="/about">About</Link>

                        <Link className="nav-item" to="/contact">Contact</Link>
                    </div>

                </nav>
            </div>
        )
    }
    changeClass = () => {
        if (this.state.activeClass == "is-active") {
            this.setState({activeClass: ""})
        } else {
            this.setState({activeClass: "is-active", hidden: "hide"})
        }
    }
}

export default NavBar