import axios from 'axios';

const API_KEY = process.env.REACT_APP_FORECAST;
const BASE_API_URL = 'http://api.openweathermap.org/data/2.5';
const UNITS = 'metric';

const FORECAST_QUERY_URL = `${BASE_API_URL}/forecast`;

export const get5DaysForecastByCoords = async ({ latitude, longitude }) => {
  if (!API_KEY) {
    return console.error('API KEY was not provided');
  };

  const { status, statusText, data } = await axios.get(
    FORECAST_QUERY_URL,
    {
      params: {
        APPID: API_KEY,
        units: UNITS,
        lat: latitude,
        lon: longitude,
      }
    }
  );

  return { status, statusText, data };
};
