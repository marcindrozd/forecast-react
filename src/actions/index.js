import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAILURE } from '../constants';

export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: {
      data
    }
  }
};

export const fetchForecastFailure = (error) => {
  return {
    type: FETCH_FORECAST_FAILURE,
    error
  }
};
