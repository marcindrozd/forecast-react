import { put, call } from 'redux-saga/effects';
import { fetchForecastByGeolocation } from '../../sagas/forecasts';
import { testSaga } from 'redux-saga-test-plan';

import * as types from '../../constants';
import * as utils from '../../utils';
import * as api from '../../api';

describe('fetchForecastByGeolocation', () => {
  it('requests the forecast data and dispatches actions', () => {
    const saga = testSaga(fetchForecastByGeolocation);

    saga
      .next()
      .put({ type: types.FETCH_FORECAST_START })
      .next()
      .call(utils.getUserLocation)
      .next('London')
      .call(api.get5DaysForecastByCoords, 'London')
    // expect(saga.next().value).toEqual(put({ type: types.FETCH_FORECAST_START }));
    // expect(saga.next().value).toEqual(call(utils.getUserLocation));
    // expect(saga.next('London').value).toEqual(call(api.get5DaysForecastByCoords, 'London'));

    // console.log(saga.next('data').value)
  });
});
