import React, {Component} from 'react';
import "./css/Editor.css";
import NavBar from './Components/Admin/NavBar/NavBar.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar/> {this.props.children}
      </div>
    );
  }
}

export default App;
