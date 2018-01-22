import React from 'react';
import { connect } from 'react-redux';

import { FETCH_FORECAST_REQUEST } from '../constants';

import CurrentLocationInfo from './CurrentLocationInfo';
import WeatherDetails from './WeatherDetails';

class ForecastApp extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
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
        <CurrentLocationInfo />
        <WeatherDetails />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: () => dispatch({ type: FETCH_FORECAST_REQUEST })
  }
}

ForecastApp = connect(null, mapDispatchToProps)(ForecastApp);

export default ForecastApp;
