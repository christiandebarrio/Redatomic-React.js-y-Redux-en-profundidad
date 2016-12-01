import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render(){
    return (
      <div>
        <h1>Counter</h1>
        <button type="button" className="btn btn-default" onClick={ this.handleClick }>{ this.state.clicks }</button>
      </div>
    );
  }
}

export default Counter;