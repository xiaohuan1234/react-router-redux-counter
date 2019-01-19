import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Control from './Control';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"></div>
        <div className="main">
          <Control/>
          <Card colorSelected="green" count={0} onType={()=>{console.log("typed");}}/>
          <Control/>
        </div>        
      </div>
    );
  }
}

export default App;
