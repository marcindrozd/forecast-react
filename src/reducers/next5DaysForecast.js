import { FETCH_FORECAST_SUCCESS } from '../constants';

const initialState = () => [
  { date: '21/01', degrees: '5' },
  { date: '22/01', degrees: '-1' },
  { date: '23/01', degrees: '0' },
  { date: '24/01', degrees: '3' },
  { date: '25/01', degrees: '1' },
];

const somethingElse = () => [
  { date: '21/03', degrees: '15' },
  { date: '22/03', degrees: '11' },
  { date: '23/03', degrees: '10' },
  { date: '24/03', degrees: '13' },
  { date: '25/03', degrees: '12' },
];

const next5DaysForecast = (state = initialState(), { type, payload }) => {
  switch (type) {
    case (FETCH_FORECAST_SUCCESS):
      return somethingElse();
    default:
      return state;
  }
};

export default next5DaysForecast;
