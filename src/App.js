import React, { Component } from 'react';
import UserInfo from './components/UserSection/UserInfo';
import './App.css';
import Repository from './components/Repository/Repository';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="left">
            <UserInfo />
          </div>
          <div className="right">
            <Repository />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
