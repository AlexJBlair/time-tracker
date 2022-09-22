/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import './TimeReadout.css';

export class TimeReadout extends Component {
  currentTime() {
    return new Date().toLocaleTimeString();
  }
  constructor(props) {
    super(props);
    this.state = { time: this.currentTime() };
  }
  render() {
    return (
      <div>
        <h3>{this.state.time}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.currentTime() }),
      1000
    );
  }
  componentWillUnMount() {
    clearInterval(this.interval);
  }
}

export default TimeReadout;
