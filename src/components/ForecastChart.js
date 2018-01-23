import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import { getForecastData } from '../reducers';

import './ForecastChart.css';

class ForecastChart extends React.Component {
  render() {
    const { forecastData } = this.props;
    const label = "Max temperature";
    const backgroundColor = "rgba(174,234,0,0.4)";
    const borderColor = "rgba(174,234,0,1)"
    const dates = forecastData.map(forecast => forecast.date);
    const temperatures = forecastData.map(forecast => forecast.temp);

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
  }
};

const mapStateToProps = (state) => {
  return {
    forecastData: getForecastData(state),
  }
};

ForecastChart = connect(mapStateToProps)(ForecastChart);

export default ForecastChart;
