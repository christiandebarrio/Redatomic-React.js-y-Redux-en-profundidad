import React, { PropTypes } from 'react';

const Summary = (props) => (
  <div className="search-results-summary">
    <div className="row">
      Encontrados <span className="search-results-total">{ props.total }</span> personajes
    </div>
  </div>
);

Summary.propTypes = {
  total:PropTypes.number
};

export default Summary;