import { combineReducers } from 'redux';

import location, * as fromLocation from 'reducers/location';
import forecast, * as fromForecast from 'reducers/forecast';
import isFetching, * as fromIsFetching from 'reducers/isFetching';

const reducer = combineReducers({
  location,
  forecast,
  isFetching,
});

export default reducer;

export const getErrorMessage = (state) =>
  fromForecast.getErrorMessage(state.forecast);

export const getForecastData = (state) =>
  fromForecast.getForecastData(state.forecast);

export const getIsFetchingStatus = (state) =>
  fromIsFetching.getIsFetchingStatus(state.isFetching);

export const getLocation = (state) =>
  fromLocation.getLocation(state.location);
