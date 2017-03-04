// Imports all necessary libarays

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"

//Import Components
import AdminApp from './AdminApp';
import {Router, Route, browserHistory, withRouter} from 'react-router';
import ViewPost from './Components/Admin/ViewPosts/ViewPost.jsx';
import EditPost from './Components/Admin/EditPost/EditPost.jsx';
import PostEditor from './Components/Admin/PostEditor/PostEditor.jsx';
import Login from './Components/Admin/Login/Login.jsx';
import ClientViewer from "./Components/Client/HomePage/ClientViewer.jsx"
import Post from "./Components/Client/Posts/Post.jsx"
import Client from "./Components/Client/HomePage/Client.jsx"
import Error404 from "./Components/Errors/404.jsx";
import Contact from "./Components/Client/Contact/Contact.jsx";
import AdminAbout from "./Components/Admin/About/About.jsx";
import ClientAbout from "./Components/Client/About/About.jsx"

// imports bulma
import "./css/bulma/main.css";

axios.defaults.baseURL = "http://localhost:3001/";

class Index extends Component {

  constructor() {
    super()

    this.state = {
      token: ""
    }
  }

  render() {
    return (

      <Router history={browserHistory}>
        <Route
          component={(props) => <Login passUpToken={this.getToken}/>}
          path="/admin"></Route>

        <Route component={Client}>
          <Route component={ClientAbout} path="/about"></Route>
          <Route component={ClientViewer} path="/"></Route>
          <Route component={Post} path="/post/:post_id"></Route>
          <Route component={Contact} path="/contact"></Route>
        </Route>

        <Route component={AdminApp} onEnter={this.checkIfAuth}>

          <Route component={ViewPost} path="admin/viewPosts"></Route>
          <Route component={PostEditor} path={"admin/add"}></Route>
          <Route component={EditPost} path={"admin/edit/:post_id"}></Route>

          <Route component={AdminAbout} path ={"admin/about"}></Route>
        </Route>

        <Route component={Error404} path="*"/>

      </Router>

    );
  }

  checkIfAuth = () => {
    if (this.state.token.length > 3) {
      axios({
        method: "GET",
        url: "api/ping",
        headers: {
          'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
          "Authorization": this.state.token
        },
        data: {
          "text": "text"
        }
      }).then((response) => {
        console.log(response)

        if (!response.data.msg === "Pong") {
          browserHistory.replace("/")
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      browserHistory.replace("/")
    }

  }

  getToken = (token) => {
    console.log(token)
    this.setState({"token": token})
    axios.defaults.headers.common["Authorization"] = this.state.token
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('root'));
