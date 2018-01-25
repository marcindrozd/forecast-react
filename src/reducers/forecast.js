import * as types from 'actions/types';

const initialState = () => (
  {
    errorMessage: null,
    tempByDate: []
  }
);

const forecast = (state = initialState(), { type, payload, error }) => {
  switch (type) {
    case types.FETCH_FORECAST_SUCCESS:
      return { ...state, tempByDate: payload.tempByDate }
    case types.FETCH_FORECAST_FAILURE:
      return { ...state, errorMessage: error }
    default:
      return state;
  }
};

export default forecast;

export const getForecastData = state => state.tempByDate;
export const getErrorMessage = state => state.errorMessage;
