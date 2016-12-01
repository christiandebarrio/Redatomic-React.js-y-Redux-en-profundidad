import React, { PropTypes } from 'react';
import Summary from './summary';
import ResultsItem from './results_item';

const Results = (props) => {

  const { items } = props;
  const resultItems = items.map(item => 
    <ResultsItem key={ item.actor } item={ item } />
  );

  return (
    <div className="search-results">
      <table>
        <thead>
          <tr>
            <th>Personaje</th>
            <th>Actor</th>
            <th className="center">Temporadas</th>
            <th className="center">Vivo</th>
          </tr>
        </thead>
        <tbody>
          { resultItems }
        </tbody>
      </table>
      <Summary total={ items.length }/>
    </div>
  );
};

Results.propTypes = {
  items: PropTypes.array
};

export default Results;