import React from 'react';
import './App.css';
import PokemonCard from './pokemonSrc/pokemonCard/pokemonCard.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <PokemonCard/>
      </div>
    );
  }
}