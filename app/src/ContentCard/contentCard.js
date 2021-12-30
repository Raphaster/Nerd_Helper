import React from 'react';
import './contentCard.css';
import placeholder from './placeholder.jpeg'
export default class ContentCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var value = (
                <div class = 'item'>
                    <div class = 'textHolder'></div>
                    <div class = 'insideSpam'></div>
                    <img class = 'itemImage' src={placeholder} alt="Placeholder" />
                    <div class = 'insideSpam'></div>
                    <div class = 'textHolder'></div>
                    <div class = 'insideSpam'></div>
                    <div class = 'textHolder'></div>
                </div>
        );
        return value;
    }

    componentDidMount() {  }
    componentWillUnmount() {  }
}