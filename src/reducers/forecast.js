import * as types from 'actions/types';

const initialState = () => (
  {
    errorMessage: null,
    temperatures: []
  }
);

const forecast = (state = initialState(), { type, payload, error }) => {
  switch (type) {
    case types.FETCH_FORECAST_SUCCESS:
      return { ...state, temperatures: [...payload.temperatures] }
    case types.FETCH_FORECAST_FAILURE:
      return { ...state, errorMessage: error }
    default:
      return state;
  }
};

export default forecast;

export const getForecastData = state => state.temperatures;
export const getErrorMessage = state => state.errorMessage;
