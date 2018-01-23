import { combineReducers } from 'redux';

import location from './location';
import forecast, * as fromForecast from './forecast';

const reducer = combineReducers({
  location,
  forecast,
});

export default reducer;

export const getErrorMessage = (state) =>
  fromForecast.getErrorMessage(state.forecast)

export const getForecastData = (state) =>
  fromForecast.getForecastData(state.forecast)
