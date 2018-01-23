import { takeEvery } from 'redux-saga/effects';

import { FETCH_FORECAST_REQUEST } from '../constants';

import { fetchForecastByGeolocation } from './forecasts';

function * watchAsync() {
  yield takeEvery(FETCH_FORECAST_REQUEST, fetchForecastByGeolocation);
};

export default watchAsync;
