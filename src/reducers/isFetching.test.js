import reducer from 'reducers/isFetching';
import * as types from 'actions/types';

describe('isFetching reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        inProgress: false,
      }
    );
  });

  it('should handle FETCH_FORECAST_START', () => {
    expect(
      reducer(undefined, { type: types.FETCH_FORECAST_START })
    ).toEqual(
      {
        inProgress: true,
      }
    );
  });

  it('should handle FETCH_FORECAST_SUCCESS', () => {
    expect(
      reducer(undefined, { type: types.FETCH_FORECAST_SUCCESS })
    ).toEqual(
      {
        inProgress: false
      }
      );
  });

  it('should handle FETCH_FORECAST_FAILURE', () => {
    expect(
      reducer(undefined, { type: types.FETCH_FORECAST_FAILURE })
    ).toEqual(
      {
        inProgress: false
      }
    );
  });
});
