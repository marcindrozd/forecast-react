import axios from 'axios';

const API_KEY = process.env.REACT_APP_FORECAST;
const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const UNITS = 'metric';

const FORECAST_QUERY = `${BASE_URL}/forecast?APPID=${API_KEY}&units=${UNITS}`;

export const get5DaysForecastByCoords = async (location) => {
  const { status, statusText, data } = await axios.get(
    FORECAST_QUERY,
    {
      params: {
        lat: location.latitude,
        lon: location.longitude,
      }
    }
  );

  return { status, statusText, data };
};
