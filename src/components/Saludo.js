import React, { Component, PropTypes } from 'react';

class Saludo extends Component {
  render(){
    const { text, user } = this.props;

    return (
      <div>
        <h1>{ text }, { user.name } { user.lastName }</h1>
      </div>
    );
  }
}

Saludo.propTypes = {
  text: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })
};

export default Saludo;