import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";

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

            <nav className="nav">

                <span onClick={this.changeClass} className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className={`nav-right nav-menu ${this.state.activeClass}`}>
                    <Link className="nav-item" to="/admin/about">About Page</Link>
                    <Link className="nav-item" to="/admin/viewPosts">View Posts</Link>

                    <Link className="nav-item" to="/admin/add">Add a new Post</Link>

                    <Link className="nav-item" to="/" onClick={this.logout}>Logout</Link>
                </div>
            </nav>
        )
    }

    changeClass = () => {
        if (this.state.activeClass == "is-active") {
            this.setState({activeClass: ""})
        } else {
            this.setState({activeClass: "is-active", hidden: "hide"})
        }
    }

    logout = () => {
        axios
            .get("api/logout ")
            .then((response) => {
                console.log(response)
            })
    }

}

export default NavBar