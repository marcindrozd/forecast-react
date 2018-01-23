import React from 'react';

import './Header.css';

const Header = () => (
  <header>
    <h1>Forecast App</h1>
    <p className='subtitle'>
      <em>Displaying weather forecast for your current location since 2018.</em>
    </p>
  </header>
);

export default Header;
