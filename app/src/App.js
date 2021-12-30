import React from 'react';
import './App.css';
import Organizer from './Organizer/organizer.js'

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
        <Organizer/>
      </div>
    );
  }
}