import React from 'react';
import PropTypes from 'prop-types';

import CurrentLocation from 'components/CurrentLocation';
import ForecastTable from 'components/ForecastTable';
import ForecastChart from 'components/ForecastChart';

const ForecastDetails = ({ location, forecastData }) => (
  <div>
    <CurrentLocation location={location} />
    <ForecastTable forecastData={forecastData} />
    <ForecastChart forecastData={forecastData} />
  </div>
);

ForecastDetails.propTypes = {
  location: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
}

export default ForecastDetails;
