import axios from 'axios';

import { API_KEY, BASE_API_URL } from '../constants';

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
