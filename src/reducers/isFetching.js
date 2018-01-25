import * as types from 'actions/types';

const initialState = () => (
  { inProgress: false }
);

const isFetching = (state = initialState(), { type }) => {
  switch (type) {
    case types.FETCH_FORECAST_START:
      return { ...state, inProgress: true };
    case types.FETCH_FORECAST_SUCCESS:
    case types.FETCH_FORECAST_FAILURE:
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

export default isFetching;

export const getIsFetchingStatus = state => state.inProgress;
