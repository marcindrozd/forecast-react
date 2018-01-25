import reducer from 'reducers/forecast';
import * as types from 'actions/types';

describe('forecast reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        errorMessage: null,
        temperatures: [],
      }
    );
  });

  it('should handle FETCH_FORECAST_SUCCESS', () => {
    expect(reducer({},
      {
        type: types.FETCH_FORECAST_SUCCESS,
        payload: {
          temperatures: [
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
      }
    )).toEqual(
      {
        temperatures: [
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
      );
  });

  it('should handle FETCH_FORECAST_FAILURE', () => {
    expect(reducer({},
      {
        type: types.FETCH_FORECAST_FAILURE,
        error: 'Something went wrong'
      }
    )).toEqual(
      {
        errorMessage: 'Something went wrong'
      }
      );
  });
});
