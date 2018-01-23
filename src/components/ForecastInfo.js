import React from 'react';

import CurrentLocationInfo from './CurrentLocationInfo';
import ForecastDetails from './ForecastDetails';
import ForecastChart from './ForecastChart';

const ForecastInfo = () => (
  <div>
    <CurrentLocationInfo />
    <ForecastDetails />
    <ForecastChart />
  </div>
);

export default ForecastInfo;
