import React, { PropTypes } from 'react';

const SeasonOptions = (props) => {
  const { season, isChecked, onChange } = props;

  return (
    <div className="season-option">
      { season }
      <input 
        type="checkbox" 
        name={ "s" + season }
        value={ season }
        checked={ isChecked }
        onChange={ onChange } />
    </div> 
  );
};

SeasonOptions.propTypes = {
  season: PropTypes.number,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default SeasonOptions;