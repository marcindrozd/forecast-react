import { combineReducers } from 'redux';

import currentLocation from './currentLocation';
import next5DaysForecast from './next5DaysForecast';

const reducer = combineReducers({
  currentLocation,
  next5DaysForecast,
});

export default reducer;
