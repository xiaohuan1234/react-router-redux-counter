import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Channel from './Channel';
import {Route, withRouter} from 'react-router-dom';
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
        <Route path="/:color" component={(props)=><Channel color={props.match.params.color} onClick={this.onClick}/>}/>
      </div>
    );
  }
}
//<Route path="/:color" render={(props)=>(<div>{props.match.params.color}</div>)}/>
//<Route path="/:color" render={(props)=><Channel {...props} color={props.match.params.color} onClick={this.onClick} />}/>
export default withRouter(App);
