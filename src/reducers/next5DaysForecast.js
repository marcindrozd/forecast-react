const initialState = () => (
  { next5DaysForecast: [] }
);

const next5DaysForecast = (state = initialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default next5DaysForecast;
