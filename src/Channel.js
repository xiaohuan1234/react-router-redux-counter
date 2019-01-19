import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import Card from './Card';
import Control from './Control';

const Channel = (props) => (
    <div className="main">
     <Control controlDirection={"DECREMENT"} channel={props.color} onClick={props.onClick}/>
          <Card colorSelected={props.color} count={0} onType={()=>{console.log("typed");}}/>
          <Control controlDirection={"INCREMENT"} channel={props.color} onClick={props.onClick}/>
    </div>
    );

export default Channel;    