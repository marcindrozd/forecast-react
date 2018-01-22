import { call, put } from 'redux-saga/effects';

import * as api from '../api';
import { fetchForecastSuccess, fetchForecastFailure } from '../actions';

export function * fetchForecast() {
  const location = 'Rybnik,pl';

  try {
    const { status, statusText, data } = yield call(api.get5DaysForecast, location);

    if (status === 200) {
      yield put(fetchForecastSuccess(data));
    } else {
      yield put(fetchForecastFailure(statusText));
    }
  } catch (error) {
    yield put(fetchForecastFailure(error));
  }
};
