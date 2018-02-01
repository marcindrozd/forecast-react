import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './styles.css';

const ForecastChart = ({ forecastData }) => {
  const dates = forecastData.map(forecast => forecast.date);
  const temperatures = forecastData.map(forecast => forecast.temp);
  const label = "Max temperature";
  const backgroundColor = "rgba(174,234,0,0.4)";
  const borderColor = "rgba(174,234,0,1)";

  const data = {
    labels: dates,
    datasets: [
      {
        label,
        backgroundColor,
        borderColor,
        data: temperatures,
      }
    ]
  };

  return (
    <div className='chart'>
      <Line data={data} />
    </div>
  )
};

ForecastChart.propTypes = {
  forecastData: PropTypes.array.isRequired
};

export default ForecastChart;
