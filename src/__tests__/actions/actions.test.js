import * as actions from '../../actions';
import * as types from '../../constants';

describe('fetchForecastStart', () => {
  it('should create an action informing about fetch start', () => {
    const expectedAction = {
      type: types.FETCH_FORECAST_START
    }

    expect(actions.fetchForecastStart()).toEqual(expectedAction);
  });
});

describe('fetchForecastEnd', () => {
  it('should create an action informing about fetch end', () => {
    const expectedAction = {
      type: types.FETCH_FORECAST_END
    }

    expect(actions.fetchForecastEnd()).toEqual(expectedAction);
  });
});

describe('fetchLocationSuccess', () => {
  it('should create an action with city info', () => {
    const data = {
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

    expect(actions.fetchLocationSuccess(data)).toEqual(expectedAction);
  });
});

describe('fetchForecastSuccess', () => {
  it('should create an action with parsed forecast data', () => {
    const data = {
      list: [
        {
          dt: 1517065200,
          main: {
            temp: 10
          },
          dt_txt: "2018-01-27 15:00:00"
        },
        {
          dt: 1517076000,
          main: {
            temp: 4
          },
          dt_txt: "2018-01-27 18:00:00"
        },
        {
          dt: 1517119200,
          main: {
            temp: 6
          },
          dt_txt: "2018-01-28 06:00:00"
        },
        {
          dt: 1517130000,
          main: {
            temp: 5
          },
          dt_txt: "2018-01-28 09:00:00"
        },
      ],
      city: {
        name: 'Tokyo'
      }
    };

    const expectedAction = {
      type: types.FETCH_FORECAST_SUCCESS,
      payload: {
        data: [
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

    expect(actions.fetchForecastSuccess(data)).toEqual(expectedAction);
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
