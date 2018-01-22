import React from 'react';

const WeatherTable = ({ forecastData }) => (
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
);

export default WeatherTable;
