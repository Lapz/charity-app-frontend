import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";
import './css/clientNavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signindIn: false
        }
    }

    render() {
        return (
            <nav className="nav-bar">
                <nav className="wrapper">
                    <div className="Logo">
                        <h1>
                            Lapz's weird and wonderfull world
                        </h1>
                    </div>

                    <label htmlFor="menu-toggle" className="label-toggle"></label>

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

                    </ul>
                </nav>
            </nav>
        )
    }

    logout = () => {
        axios
            .get("http://localhost:3001/api/logout")
            .then((response) => {
                console.log(response)
            })
    }

}

export default NavBar