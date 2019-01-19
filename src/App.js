import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Card from './Card';
import Control from './Control';
class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(controlDirection, channel) {
    console.log("clicked:", controlDirection, channel);
  }
  render() {
    return (
      <div className="App">
        <div className="header"></div>
        <div className="main">
          <Control controlDirection={"DECREMENT"} channel={"blue"} onClick={this.onClick}/>
          <Card colorSelected="green" count={0} onType={()=>{console.log("typed");}}/>
          <Control controlDirection={"INCREMENT"} channel={"blue"} onClick={this.onClick}/>
        </div>        
      </div>
    );
  }
}

export default App;
