import React from 'react';
import './styles.scss';

const Header = () => (
  <header className="header">
    <h1>
      AirMonitor <small className="text-muted">Kraków</small>
    </h1>
    <h5>Dane o jakości powietrza dla twojej aplikacji</h5>
  </header>
);

export default Header;
