import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";
import CloseButton from "./CloseButton.jsx";
import './css/clientNavBar.css';

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
            <div className="nav-wrapper">
                <nav>
                    <ul>

                        <li>
                            <Link to="/">Homepage</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        <CloseButton
                            changeClass={this.changeClass}
                            activeClass={this.state.activeClass}/>
                    </ul>

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