import { takeLatest } from 'redux-saga/effects';

import { FETCH_FORECAST_REQUEST } from 'actions/types';

import { fetchForecastByGeolocation } from 'sagas/forecast';

function * watchAsync() {
  yield takeLatest(FETCH_FORECAST_REQUEST, fetchForecastByGeolocation);
};

export default watchAsync;
