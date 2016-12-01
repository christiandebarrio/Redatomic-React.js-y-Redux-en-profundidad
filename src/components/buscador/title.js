import React, { PropTypes } from 'react';

const Title = (props) => (
  <div className="search-title">
    <div className="row">
      <h1>{ props.text }</h1>
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string
};

export default Title;