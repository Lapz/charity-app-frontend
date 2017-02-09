import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/navBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signindIn: false
        }
    }

    render() {
        return (
            <div className="wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to="/viewPosts">View posts</Link>
                        </li>

                        <li>
                            <Link to="/add">Add a new Post</Link>
                        </li>
                        {(this.state.signindIn === false)
                            ? (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )
                            : (
                                <li>
                                    <button >Logout</button>
                                </li>
                            )}
                    </ul>
                </nav>
            </div>
        )
    }
    // checkIfSingedIn = ()=>{ onClick={this.signUserOut}
    // firebase.auth().onAuthStateChanged((user) => {   if (user) {     // User is
    // signed in.     this.setState({         signindIn:true     })   } else { // No
    // user is signed in.   } }); } signUserOut = ()=>{
    // firebase.auth().signOut().then( ()=> {         this.setState({
    // signindIn:false     })   // Sign-out successful. }, (error) => {   // An
    // error happened.   this.setState({         signindIn:true     }) }); }

    componentDidMount() {

        // this.checkIfSingedIn();

    }

}

export default NavBar