const initialState = () => [
  { date: '21/01', degrees: '5' },
  { date: '22/01', degrees: '-1' },
  { date: '23/01', degrees: '0' },
  { date: '24/01', degrees: '3' },
  { date: '25/01', degrees: '1' },
];

const next5DaysForecast = (state = initialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default next5DaysForecast;
