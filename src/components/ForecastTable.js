import React from 'react';
import PropTypes from 'prop-types';

import './ForecastTable.css';

const ForecastTable = ({ forecastData }) => (
  <div className='forecastTable'>
    <h3>Weather forecast for the next 5 days</h3>
    <table>
      <thead>
        <tr>
          <th>Date:</th>
          {
            forecastData.map(forecast => (
              <th key={forecast.date}>{forecast.date}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Max Temp.</td>
          {
            forecastData.map(forecast => (
              <td key={forecast.date}>{forecast.temp}&deg;C</td>
            ))
          }
        </tr>
      </tbody>
    </table>
  </div>
);

ForecastTable.propTypes = {
  forecastData: PropTypes.array.isRequired
}

export default ForecastTable;
