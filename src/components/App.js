import React from 'react';
import { get5DaysForecast } from '../api';

class App extends React.Component {
  componentDidMount() {
    get5DaysForecast('Rybnik,pl');
  }

  render() {
    return (
      <div className="ForecastApp">
        <header>
          <h1>Forecast App</h1>
        </header>
        <p>
          Displaying weather forecast for your current location since 2018.
        </p>
      </div>
    )
  }
};

export default App;
