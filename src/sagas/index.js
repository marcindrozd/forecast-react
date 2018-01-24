import { takeEvery } from 'redux-saga/effects';

import { FETCH_FORECAST_REQUEST } from '../actions/types';

import { fetchForecastByGeolocation } from './forecast';

function * watchAsync() {
  yield takeEvery(FETCH_FORECAST_REQUEST, fetchForecastByGeolocation);
};

export default watchAsync;
