import { call, put } from 'redux-saga/effects';

import * as api from '../api';
import * as utils from '../utils';
import { fetchForecastSuccess, fetchForecastFailure } from '../actions';

export function * fetchForecastByGeolocation() {
  try {
    const location = yield call(utils.getUserLocation);
    const { data } = yield call(api.get5DaysForecastByCoords, location);

    yield put(fetchForecastSuccess(data));
  } catch (error) {
    yield put(fetchForecastFailure(error));
  }
};
