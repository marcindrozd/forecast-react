import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ForecastTable from './ForecastTable';
import FetchError from './FetchError';
import { getForecastData, getErrorMessage } from '../reducers';

class ForecastDetails extends React.Component {
  render() {
    const { forecastData, errorMessage } = this.props;

    if (errorMessage && !forecastData.length) {
      return (
        <FetchError message={errorMessage} />
      )
    }

    return (
      <ForecastTable forecastData={forecastData} />
    )
  }
};

ForecastDetails.propTypes = {
  forecastData: PropTypes.array,
  errorMessage: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    forecastData: getForecastData(state),
    errorMessage: getErrorMessage(state),
  };
};

export default connect(mapStateToProps)(ForecastDetails);
