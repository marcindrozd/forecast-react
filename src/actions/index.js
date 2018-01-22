import moment from 'moment';
import groupBy from 'lodash/groupBy';
import max from 'lodash/max';

import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAILURE } from '../constants';

export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: {
      data: parsedData(data)
    }
  }
};

export const fetchForecastFailure = (error) => {
  return {
    type: FETCH_FORECAST_FAILURE,
    error
  }
};

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
