import { FETCH_FORECAST_SUCCESS } from '../constants';

const initialState = () => [];

const forecast = (state = initialState(), { type, payload }) => {
  switch (type) {
    case (FETCH_FORECAST_SUCCESS):
      return payload.data;
    default:
      return state;
  }
};

export default forecast;
