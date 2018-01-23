import { FETCH_FORECAST_START, FETCH_FORECAST_END } from '../constants';

const initialState = () => (
  { inProgress: false }
);

const isFetching = (state = initialState(), { type }) => {
  switch (type) {
    case FETCH_FORECAST_START:
      return { ...state, inProgress: true };
    case FETCH_FORECAST_END:
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

export default isFetching;
