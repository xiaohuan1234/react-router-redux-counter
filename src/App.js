import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Channel from './Channel';
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
        
         <Channel color="blue" onClick={this.onClick}/>
        
      </div>
    );
  }
}

export default App;
