import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as types from 'actions/types';

import Spinner from 'components/Spinner';
import ForecastDetails from 'components/ForecastDetails';
import ForecastError from 'components/ForecastError';

import {
  getForecastData,
  getIsFetchingStatus,
  getLocation,
  getErrorMessage,
} from 'reducers';

class Forecast extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  render() {
    const { isFetching, location, forecastData, errorMessage } = this.props;
    const hasError = () => (errorMessage && !forecastData.length);

    if (hasError()) {
      return (
        <ForecastError errorMessage={errorMessage} />
      )
    }

    return (
      <div>
        { isFetching
          ? <Spinner />
          : <ForecastDetails location={location} forecastData={ forecastData } />
        }
      </div>
    )
  }
};

Forecast.propTypes = {
  isFetching: PropTypes.bool,
  location: PropTypes.string.isRequired,
  fetchForecast: PropTypes.func.isRequired,
  forecastData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => (
  {
    isFetching: getIsFetchingStatus(state),
    location: getLocation(state),
    forecastData: getForecastData(state),
    errorMessage: getErrorMessage(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchForecast: () => dispatch({ type: types.FETCH_FORECAST_REQUEST }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
