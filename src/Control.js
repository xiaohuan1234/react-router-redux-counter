import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './Control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// eslint-disable-line no-unused-vars
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const controlIcons = {
    INCREMENT: faPlus,
    DECREMENT: faMinus,
};
class Control extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick({controlDirection, channel}) {
    this.props.onClick(controlDirection, channel);
  }
  render() {
    const {controlDirection, channel} = this.props;
    return (
        <button style={{color: channel}} className="grid control" onClick={this.onClick.bind(this, {controlDirection, channel})}>
            <FontAwesomeIcon icon={controlIcons[controlDirection]} />
        </button>
    );
}
}
export default Control;