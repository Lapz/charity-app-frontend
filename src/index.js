import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

// App Components

import PostEditor from './Components/PostEditor/PostEditor.jsx';
// import StationSearch from './Components/StationSearch/StationSearch.jsx';
// import LineStatus from './Components/LineStatus/LineItemContainer.jsx';
// import Favourite from './Components/Favourites/Favourites.jsx';
// import Login  from './Components/Login/Login.jsx';
// import * as firebase from 'firebase';


class Index extends Component {
  render() {
    return (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route component={PostEditor} path={"/"}></Route>
      </Route>
      
    </Router>
     
    );
  }
}



ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
