import * as types from 'actions/types';

const initialState = () => (
  {
    city: ''
  }
);

const location = (state = initialState(), { type, payload }) => {
  switch (type) {
    case types.FETCH_LOCATION_SUCCESS:
      return { ...state, city: payload.location }
    default:
      return state;
  }
};

export default location;

export const getLocation = state => state.city;
