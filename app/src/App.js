import React from 'react';
import './App.css';
import ContentCard from './ContentCard/contentCard.js'

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
        <ContentCard/>
      </div>
    );
  }
}