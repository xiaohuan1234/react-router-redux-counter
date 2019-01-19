import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './Channel.css';
import Card from './Card';
import Control from './Control';

const Channel = (props) => { 
    console.log(props);
    return (<div className="main">
     <Control controlDirection={"DECREMENT"} channel={props.color} onClick={props.onClick}/>
          <Card colorSelected={props.color} count={props.value} onType={()=>{console.log("typed");}}/>
          <Control controlDirection={"INCREMENT"} channel={props.color} onClick={props.onClick}/>
    </div>);
    };

export default Channel;    