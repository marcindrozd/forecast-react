import React from 'react';
import { connect } from 'react-redux';

import { FETCH_FORECAST_REQUEST } from '../constants';

import CurrentLocationInfo from './CurrentLocationInfo';
import ForecastDetails from './ForecastDetails';
import ForecastChart from './ForecastChart';

import './ForecastApp.css';

class ForecastApp extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  render() {
    return (
      <div className='ForecastApp'>
        <header>
          <h1>Forecast App</h1>
          <p className='subtitle'>
            <em>Displaying weather forecast for your current location since 2018.</em>
          </p>
        </header>

        <CurrentLocationInfo />
        <ForecastDetails />
        <ForecastChart />
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
