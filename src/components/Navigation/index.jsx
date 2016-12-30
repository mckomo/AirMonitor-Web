import React from 'react'
import './styles.scss'

const Navigation = () => (
  <nav className="navigation clear">
    <ul className="nav nav-inline float-md-left">
      <li className="nav-item">
        <a className="nav-link" href="#">AirMonitor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#station">Stacje</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#channels">Kanały</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#mesurements">Pomiary</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-muted" href="#norms">Normy</a>
      </li>
    </ul>
    <ul className="nav nav-inline float-md-right">
      <li className="nav-item">
        <a className="btn btn-outline-primary" href="http://docs.airmonitor.apiary.io">Dokumentacja API</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-primary"
           href="https://github.com/mckomo/AirMonitor-API">GitHub <i className="fa fa-github" aria-hidden="true"></i></a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
