import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import './Card.css';

class Card extends Component {
  static defaultProps = {
    colorSelected: "black",
    onType: ()=>{console.log("typed");},
    count: 0,
  }
  constructor(props) {
    super(props);
    this.state = {
        inputActive: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    
  }
  
  onFocus(e) {
    this.setState({inputActive: true});
  }
  onBlur(e) {
    this.setState({inputActive: false});
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    return (
    <div className="grid card" style={{background: this.props.colorSelected}}>
        <input 
          type ="text" 
          onChange = {this.props.onType} 
          value = {this.state.inputActive?this.props.count:this.numberWithCommas(this.props.count)} 
          onFocus = {this.onFocus}
          onBlur = {this.onBlur}
        />
    </div>);
}
}
export default Card;