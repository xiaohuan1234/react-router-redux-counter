import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card colorSelected="green" count={0} onType={()=>{console.log("typed");}}/>
      </div>
    );
  }
}

export default App;
