import * as actions from 'actions/forecast';
import * as types from 'actions/types';

describe('fetchForecastStart', () => {
  it('should create an action informing about fetch start', () => {
    const expectedAction = {
      type: types.FETCH_FORECAST_START
    }

    expect(actions.fetchForecastStart()).toEqual(expectedAction);
  });
});

describe('fetchLocationSuccess', () => {
  it('should create an action with city info', () => {
    const locationInfo = {
      city: {
        name: 'New York'
      }
    };

    const expectedAction = {
      type: types.FETCH_LOCATION_SUCCESS,
      payload: {
        location: 'New York',
      }
    };

    expect(actions.fetchLocationSuccess(locationInfo)).toEqual(expectedAction);
  });
});

describe('fetchForecastSuccess', () => {
  it('should create an action with parsed forecast data', () => {
    const apiResponseItem = ({ dt, temp, text }) => ({ dt, dt_txt: text, main: { temp } });

    const apiResponse = {
      list: [
        apiResponseItem({ dt: 1517065200, temp: 10, text: '2018-01-27 15:00:00' }),
        apiResponseItem({ dt: 1517076000, temp: 4, text: '2018-01-27 18:00:00' }),
        apiResponseItem({ dt: 1517119200, temp: 6, text: '2018-01-28 06:00:00' }),
        apiResponseItem({ dt: 1517130000, temp: 5, text: '2018-01-28 09:00:00' }),
      ],
      city: {
        name: 'Tokyo'
      }
    };

    const expectedAction = {
      type: types.FETCH_FORECAST_SUCCESS,
      payload: {
        tempByDate: [
          {
            date: '27-01-2018',
            temp: 10
          },
          {
            date: '28-01-2018',
            temp: 6
          }
        ]
      }
    };

    expect(actions.fetchForecastSuccess(apiResponse)).toEqual(expectedAction);
  });
});

describe('fetchForecastFailure', () => {
  it('should create an action with error message', () => {
    const error = 'Something went wrong';
    const expectedAction = {
      type: types.FETCH_FORECAST_FAILURE,
      error: 'Something went wrong'
    };

    expect(actions.fetchForecastFailure(error)).toEqual(expectedAction);
  });
});
