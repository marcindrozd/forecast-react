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
    const { isFetching, location, forecastData, errorMessage, hasError } = this.props;

    if (hasError) {
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

const checkErrors = ({ forecastData, errorMessage }) => ({
  errorMessage,
  forecastData,
  hasError: (errorMessage && !forecastData.length),
});

const mapStateToProps = (state) => (
  {
    ...checkErrors({ forecastData: getForecastData(state), errorMessage: getErrorMessage(state) }),
    isFetching: getIsFetchingStatus(state),
    location: getLocation(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchForecast: () => dispatch({ type: types.FETCH_FORECAST_REQUEST }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
