const initialState = () => (
  {
    currentLocation: 'Rybnik,pl',
    next5DaysForecast: [],
  }
)

const forecastApp = (state = initialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default forecastApp;
