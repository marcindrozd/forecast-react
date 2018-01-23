import { FETCH_LOCATION_SUCCESS } from '../constants';

const initialState = () => (
  {
    city: ''
  }
);

const location = (state = initialState(), { type, payload }) => {
  switch (type) {
    case FETCH_LOCATION_SUCCESS:
      return { ...state, city: payload.location }
    default:
      return state;
  }
};

export default location;
