import reducer from 'reducers/location';
import * as types from 'actions/types';

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        city: '',
      }
    );
  });

  it('should handle FETCH_LOCATION_SUCCESS', () => {
    expect(
      reducer(
        undefined,
        {
          type: types.FETCH_LOCATION_SUCCESS,
          payload: {
            location: 'London',
          }
        }
      )
    ).toEqual(
      {
        city: 'London',
      }
    );
  });
});
