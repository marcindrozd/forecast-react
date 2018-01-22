import { combineReducers } from 'redux';

import currentLocation from './currentLocation';
import forecast, * as fromForecast from './forecast';

const reducer = combineReducers({
  currentLocation,
  forecast,
});

export default reducer;

export const getErrorMessage = (state) =>
  fromForecast.getErrorMessage(state.forecast)

export const getForecastData = (state) =>
  fromForecast.getForecastData(state.forecast)
