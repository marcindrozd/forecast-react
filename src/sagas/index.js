import { takeEvery } from 'redux-saga/effects';

import { FETCH_FORECAST_REQUEST } from '../constants';

import { fetchForecast } from './forecasts';

function * watchAsync() {
  yield takeEvery(FETCH_FORECAST_REQUEST, fetchForecast);
};

export default watchAsync;
