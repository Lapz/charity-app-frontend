import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory, withRouter} from 'react-router';
import ViewPost from './Components/Admin/ViewPosts/ViewPost.jsx';
import EditPost from './Components/Admin/EditPost/EditPost.jsx';
import PostEditor from './Components/Admin/PostEditor/PostEditor.jsx';
import Login from './Components/Admin/Login/Login.jsx';
import ClientViewer from "./Components/Client/HomePage/ClientViewer.jsx"
import Post from "./Components/Client/Posts/Post.jsx"
import Client from "./Components/Client/HomePage/Client.jsx"
import axios from "axios"

// axios.defaults.headers.common["Authorization"] = this.state.token import
// StationSearch from './Components/Admin/StationSearch/StationSearch.jsx';
// import LineStatus from './Components/Admin/LineStatus/LineItemContainer.jsx';
// import Favourite from './Components/Admin/Favourites/Favourites.jsx'; import
// Login from './Components/Admin/Login/Login.jsx'; import * as firebase from
// 'firebase';

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
          <Route component={ClientViewer} path="/"></Route>
          <Route component={Post} path="/post/:post_id"></Route>
        </Route>

        <Route component={App} onEnter={this.checkIfAuth}>

          <Route component={ViewPost} path="admin/viewPosts"></Route>
          <Route component={PostEditor} path={"admin/add"}></Route>
          <Route component={EditPost} path={"admin/edit/:post_id"}></Route>
        </Route>

      </Router>

    );
  }

  checkIfAuth = () => {

    if (this.state.token.length > 3) {
      axios({
        method: "GET",
        url: "http://localhost:3001/api/ping",
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
          browserHistory.push("/")
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      browserHistory.push("/")
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
