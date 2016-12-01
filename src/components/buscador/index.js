import React,  { Component } from 'react';
import Title from './title';
import Results from './results';
import Data from '../../data/got';
import Form from './form';

function search(filter, characters){
  return characters.filter(c => {
    const regex = new RegExp(filter.name, 'i');
    return (
      // name
      (regex.test(c.name) || regex.test(c.actor)) &&
      // family
      (!filter.family || c.family === filter.family) &&
      // seasons [1,2,3]
      (!filter.seasons || 
        filter.seasons.every(s => c.seasons.indexOf(s) !== -1)) &&
      // alive only
      (!filter.aliveOnly || c.alive)
    );
  });
}

function extractFamilyNames(characters){
  return characters.reduce((acc, c) =>{
    if(acc.indexOf(c.family) === -1){
      acc.push(c.family);
    }
    return acc;
  }, []).sort();
}

function extractSeasons(characters){
  return characters.reduce((acc, c) => {
    c.seasons.forEach((n) => {
      if(acc.indexOf(n) === -1){
        acc.push(n);
      }
    });
    return acc;
  }, []);
}

class Buscador extends Component {
  constructor(){
    super();
    this.state = {
      characters: Data.characters,
      familyNames: extractFamilyNames(Data.characters),
      allSeasons: extractSeasons(Data.characters),
      filter: {
        name: '',
        family: '',
        seasons: [],
        aliveOnly: false
      }
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(change){
    const newFilter = Object.assign({}, this.state.filter, change);
    this.setState({
      filter: newFilter
    });
  }

  render(){
    const characters = search(this.state.filter, this.state.characters);
    return (
      <div className="search-engine">
        <Title text="Buscador de Juego de Tronos" />
        <Form 
          familyNames={ this.state.familyNames } 
          allSeasons={ this.state.allSeasons }
          filter={ this.state.filter }
          onQueryChange={ this.handleQueryChange } />
        <Results items={ characters }/>
      </div>
    );
  }
}

export default Buscador;