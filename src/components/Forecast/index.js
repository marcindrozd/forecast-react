import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as types from 'actions/types';

import Spinner from 'components/Spinner';
import ForecastDetails from 'components/ForecastDetails';

import { getForecastData, getIsFetchingStatus, getLocation } from 'reducers';

class Forecast extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  render() {
    const { isFetching, location, forecastData } = this.props;

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

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetchingStatus(state),
    location: getLocation(state),
    forecastData: getForecastData(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: () => dispatch({ type: types.FETCH_FORECAST_REQUEST }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
