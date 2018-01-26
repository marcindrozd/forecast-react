import { put, call } from 'redux-saga/effects';

import * as types from 'actions/types';
import * as utils from 'utils';
import * as api from 'api';

import { fetchForecastByGeolocation } from 'sagas/forecast';

const temperatures = [
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
    temperatures,
  }
);

describe('fetchForecastByGeolocation', () => {
  let saga;

  beforeEach(() => saga = fetchForecastByGeolocation());

  describe('successful path', () => {
    it('requests the forecast data and dispatches actions', () => {
      expect(saga.next().value).toEqual(put({ type: types.FETCH_FORECAST_START }));
      expect(saga.next().value).toEqual(call(utils.getUserLocation));
      expect(saga.next({ longitude: '52.124', latitude: '17.123' }).value).toEqual(call(api.get5DaysForecastByCoords, { longitude: '52.124', latitude: '17.123' }));
      expect(saga.next({ status: 200, statusText: 'OK', data: sampleApiResponse() }).value)
        .toEqual(put({ type: types.FETCH_LOCATION_SUCCESS, "payload": { "location": "London" } }));
      expect(saga.next({ status: 200, statusText: 'OK', data: sampleApiResponse() }).value)
        .toEqual(put({ type: types.FETCH_FORECAST_SUCCESS, "payload": { "temperatures": [] } }));
    });
  });

  describe('API throws an error', () => {
    it('should return FORECAST_REQUEST_FAILURE action', () => {
      expect(saga.next().value).toEqual(put({ type: types.FETCH_FORECAST_START }));
      expect(saga.next().value).toEqual(call(utils.getUserLocation));
      expect(saga.next({ longitude: '0', latitude: '0' }).value).toEqual(call(api.get5DaysForecastByCoords, { longitude: '0', latitude: '0' }));
      expect(saga.throw('Location not found').value).toEqual(put({ type: types.FETCH_FORECAST_FAILURE, error: 'Location not found' }));
    });
  });
});
