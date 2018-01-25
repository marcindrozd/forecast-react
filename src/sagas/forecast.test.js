import { put, call } from 'redux-saga/effects';

import * as types from 'actions/types';
import * as utils from 'utils';
import * as api from 'api';

import { fetchForecastByGeolocation } from 'sagas/forecast';

const tempByDate = [
  {
    date: '25-01-2018',
    temp: 10,
  },
];

const sampleApiResponse = () => (
  {
    city: {
      name: 'London',
    },
    tempByDate,
  }
);

describe('fetchForecastByGeolocation', () => {
  describe('successful path', () => {
    it('requests the forecast data and dispatches actions', () => {
      const saga = fetchForecastByGeolocation();

      expect(saga.next().value).toEqual(put({ type: types.FETCH_FORECAST_START }));
      expect(saga.next().value).toEqual(call(utils.getUserLocation));
      expect(saga.next({ longitude: '52.124', latitude: '17.123' }).value).toEqual(call(api.get5DaysForecastByCoords, { longitude: '52.124', latitude: '17.123' }));
      expect(saga.next({ status: 200, statusText: 'OK', data: sampleApiResponse() }).value)
        .toEqual(put({ type: types.FETCH_LOCATION_SUCCESS, "payload": { "location": "London" } }));
      expect(saga.next({ status: 200, statusText: 'OK', data: sampleApiResponse() }).value)
        .toEqual(put({ type: types.FETCH_FORECAST_SUCCESS, "payload": { "tempByDate": [] } }));
    });
  });
});
