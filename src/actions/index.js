import moment from 'moment';
import groupBy from 'lodash/groupBy';
import max from 'lodash/max';

import {
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  FETCH_LOCATION_SUCCESS,
  FETCH_FORECAST_START,
  FETCH_FORECAST_END,
} from '../constants';

export const fetchForecastSuccess = (data) => (
  {
    type: FETCH_FORECAST_SUCCESS,
    payload: {
      data: parsedData(data)
    }
  }
);

export const fetchForecastFailure = (error) => (
  {
    type: FETCH_FORECAST_FAILURE,
    error
  }
);

export const fetchLocationSuccess = (data) => (
  {
    type: FETCH_LOCATION_SUCCESS,
    payload: {
      location: data.city.name
    }
  }
);

export const fetchForecastStart = () => (
  { type: FETCH_FORECAST_START }
);

export const fetchForecastEnd = () => (
  { type: FETCH_FORECAST_END }
);

const parsedData = (data) => {
  const byDate = groupBy(data.list, (item) => (
    moment(item.dt_txt).format('DD-MM-YYYY')
  ));

  return Object.keys(byDate).map((date) => {
    return {
      date,
      temp: max(byDate[date].map((item) => item.main.temp))
    }
  });
}
