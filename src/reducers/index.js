import { combineReducers } from 'redux';

import currentLocation from './currentLocation';
import forecast from './forecast';

const reducer = combineReducers({
  currentLocation,
  forecast,
});

export default reducer;
