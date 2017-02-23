import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";
// import './css/navBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signindIn: false
        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to="admin/viewPosts">View posts</Link>
                        </li>

                        <li>
                            <Link to="admin/about">
                                About Page
                            </Link>
                        </li>

                        <li>
                            <Link to="admin/add">Add a new Post</Link>
                        </li>

                        <li>
                            <Link to="/admin" onClick={this.logout}>Logout</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }

    logout = () => {
        axios
            .get("api/logout")
            .then((response) => {
                console.log(response)
            })
    }

}

export default NavBar