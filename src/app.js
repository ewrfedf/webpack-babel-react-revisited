import React, { Component } from 'react';
import { render } from 'react-dom';

import avatar from './images/avatar.jpg';
import './style.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello from 枫上雾棋!</h1>
        <img src={avatar} alt="avatar" style={{ width: 400, height: 250 }} />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
