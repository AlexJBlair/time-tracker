import React, { Component } from 'react';
import './HeaderBar.css';

export class HeaderBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className='header-text'>Below is the current date and time! :D </h1>
      </div>
    );
  }
}

export default HeaderBar;
