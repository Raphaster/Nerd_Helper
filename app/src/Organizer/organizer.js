import React from 'react';
import './organizer.css';
import ContentCard from '../ContentCard/contentCard.js'
export default class Organizer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var value = (
                <div class = 'mainArea'>
                    <ContentCard/>
                    <ContentCard/>
                </div>
        );
        return value;
    }

    componentDidMount() {  }
    componentWillUnmount() {  }
}