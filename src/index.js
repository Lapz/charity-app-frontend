import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';
import ViewPost from './Components/ViewPosts/ViewPost.jsx'

import PostEditor from './Components/PostEditor/PostEditor.jsx';
// import StationSearch from './Components/StationSearch/StationSearch.jsx';
// import LineStatus from './Components/LineStatus/LineItemContainer.jsx';
// import Favourite from './Components/Favourites/Favourites.jsx'; import Login
// from './Components/Login/Login.jsx'; import * as firebase from 'firebase';

class Index extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route component={ViewPost} path="/viewPosts"></Route>
          <Route component={PostEditor} path={"/add"}></Route>
        </Route>

      </Router>

    );
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('root'));
