import { call, put } from 'redux-saga/effects';

import * as api from 'api';
import * as utils from 'utils';
import {
  fetchForecastSuccess,
  fetchForecastFailure,
  fetchLocationSuccess,
  fetchForecastStart,
} from 'actions/forecast';

export function * fetchForecastByGeolocation() {
  try {
    yield put(fetchForecastStart());

    const location = yield call(utils.getUserLocation);
    const { data } = yield call(api.get5DaysForecastByCoords, location);

    yield put(fetchLocationSuccess(data));
    yield put(fetchForecastSuccess(data));
  } catch (error) {
    yield put(fetchForecastFailure(error));
  }
};
