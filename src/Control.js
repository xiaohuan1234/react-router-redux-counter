import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './Control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// eslint-disable-line no-unused-vars
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Control extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    console.log("clicked");
  }
  render() {
    return (
        <button className="grid control" onClick={this.onClick}>
        <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}
}
export default Control;