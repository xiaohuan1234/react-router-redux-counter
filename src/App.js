import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Channel from './Channel';
import {Route, withRouter, NavLink} from 'react-router-dom';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:200, 300,400,700', 'sans-serif']
  }
});



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
        <header>
        <NavLink to="/red" activeClassName="selected">Red</NavLink>
        <NavLink to="/green" activeClassName="selected">Green</NavLink>
        <NavLink to="/blue" activeClassName="selected">Blue</NavLink>
      </header>
        <Route path="/:color" component={(props)=><Channel color={props.match.params.color} onClick={this.onClick}/>}/>
      </div>
    );
  }
}
//<Route path="/:color" render={(props)=>(<div>{props.match.params.color}</div>)}/>
//<Route path="/:color" render={(props)=><Channel {...props} color={props.match.params.color} onClick={this.onClick} />}/>
export default withRouter(App);
