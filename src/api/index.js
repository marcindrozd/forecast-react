import axios from 'axios';

const API_KEY = process.env.REACT_APP_FORECAST;
const BASE_API_URL = 'http://api.openweathermap.org/data/2.5';
const UNITS = 'metric';

const FORECAST_QUERY_URL = `${BASE_API_URL}/forecast`;

export const get5DaysForecastByCoords = async (location) => {
  const { status, statusText, data } = await axios.get(
    FORECAST_QUERY_URL,
    {
      params: {
        APPID: API_KEY,
        units: UNITS,
        lat: location.latitude,
        lon: location.longitude,
      }
    }
  );

  return { status, statusText, data };
};
