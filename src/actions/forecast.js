import moment from 'moment';
import groupBy from 'lodash/groupBy';
import max from 'lodash/max';

import * as types from 'actions/types';

export const fetchForecastSuccess = (forecastData) => (
  {
    type: types.FETCH_FORECAST_SUCCESS,
    payload: {
      tempByDate: parsedData(forecastData)
    }
  }
);

export const fetchForecastFailure = (error) => (
  {
    type: types.FETCH_FORECAST_FAILURE,
    error
  }
);

export const fetchLocationSuccess = (locationData) => (
  {
    type: types.FETCH_LOCATION_SUCCESS,
    payload: {
      location: locationData.city.name
    }
  }
);

export const fetchForecastStart = () => (
  { type: types.FETCH_FORECAST_START }
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
