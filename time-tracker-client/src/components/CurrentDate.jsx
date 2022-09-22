import React, { Component } from 'react';
import './CurrentDate.css';

export class CurrentDate extends Component {
  state = {};

  render() {
    return (
      <div>
        <h3>{this.getCurrentDate().toString()}</h3>
      </div>
    );
  }
  getCurrentDate() {
    let currentDate = new Date();
    let month = currentDate.getUTCMonth().toString();
    let day = currentDate.getDate().toString();
    let year = currentDate.getUTCFullYear().toString();
    let formattedDate = month + '/' + day + '/' + year;

    console.log(formattedDate);

    return formattedDate;
  }
}

export default CurrentDate;
