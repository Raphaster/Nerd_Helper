import React from 'react';
import './pokemonCard.css';
import PokemonFetcher from '../pokemonFetcher.js';
export default class PokemonCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let page = (
            <div class = 'item'>
        <div class = 'subitem'>
            <div class = 'textHolder'></div>
            <div class = 'insideSpam'></div>
            <PokemonFetcher pokemonName = "ditto"/>
            <div class = 'insideSpam'></div>
            <div class = 'textHolder'></div>
            <div class = 'insideSpam'></div>
            <div class = 'textHolder'></div>
        </div>
        <div class = 'spam'></div>
        <div class = 'subitem'>Hello World!</div>
        <div class = 'spam'></div>
        <div class = 'subitem'>Hello World!</div>
        </div>
        );
        return page;
    }

    componentDidMount() {  }
    componentWillUnmount() {  }
}