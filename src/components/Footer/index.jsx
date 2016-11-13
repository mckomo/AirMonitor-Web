import React from 'react';
import styles from './styles.scss';

export default class Footer extends React.Component {

  render() {
    console.log(styles);

    return (
      <footer className="footer">
        <span className="text-muted"> AirMonitor ·  Copyright 2016 </span>
      </footer>);
  }

}