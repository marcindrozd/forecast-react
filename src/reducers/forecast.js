import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAILURE } from '../constants';

const initialState = () => (
  {
    errorMessage: null,
    data: []
  }
);

const forecast = (state = initialState(), { type, payload, error }) => {
  switch (type) {
    case FETCH_FORECAST_SUCCESS:
      return { ...state, data: payload.data }
    case FETCH_FORECAST_FAILURE:
      return { ...state, errorMessage: error }
    default:
      return state;
  }
};

export default forecast;

export const getForecastData = (state) => state.data;
export const getErrorMessage = (state) => state.errorMessage;
