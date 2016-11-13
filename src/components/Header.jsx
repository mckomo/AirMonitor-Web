import React from 'react';
import styles from './header.scss';

export default class Header extends React.Component {

  render() {
    console.log(styles);

    return (
      <header className="header">
        <h1>
          AirMonitor<br/>
          <small className="text-muted">Kraków</small>
        </h1>
      </header>);
  }

}