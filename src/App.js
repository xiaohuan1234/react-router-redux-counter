import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import Channel from './Channel';
import { connect } from 'react-redux';
import {Route, withRouter, NavLink} from 'react-router-dom';
import {handleIncrement, handleDecrement, handleType} from './actionCreators';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:200,300,400,500,700', 'sans-serif']
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(controlDirection, channel) {
    console.log("clicked:", controlDirection, channel);
    if(controlDirection==="INCREMENT") {
        this.props.handleIncrement(channel);
    } else if(controlDirection==="DECREMENT") {
        this.props.handleDecrement(channel);
    }
    console.log("clicked:", controlDirection, channel);
  }
  render() {
    console.log(this.props.values);
    return (
      <div className="App">
        <header>
          <NavLink to="/red" activeClassName="selected">Red</NavLink>
          <NavLink to="/green" activeClassName="selected">Green</NavLink>
          <NavLink to="/blue" activeClassName="selected">Blue</NavLink>
        </header>
        <Route path="/:color" component={(props)=><Channel {...props} value={this.props.values[props.match.params.color]} color={props.match.params.color} onClick={this.onClick}/>}/>
      </div>
    );
  }
}
var mapStateToProps = (reduxState) =>{
  console.log("in mapStateToProps:", reduxState);
  return {
    // count: reduxState.count
    ...reduxState
  };
};
export default withRouter(connect(mapStateToProps, {handleIncrement, handleDecrement, handleType})(App));

