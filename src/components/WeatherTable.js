import React from 'react';
import { connect } from 'react-redux';

class WeatherTable extends React.Component {
  render() {
    const { forecastData } = this.props;

    return (
      <div>
        <h3>Weather for the next 5 days</h3>
        <table>
          <thead>
            <tr>
              {
                forecastData.map(forecast => (
                  <th key={forecast.date}>{forecast.date}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                forecastData.map(forecast => (
                  <td key={forecast.date}>{forecast.temp}</td>
                ))
              }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    forecastData: state.forecast
  }
}

export default connect(mapStateToProps)(WeatherTable);
