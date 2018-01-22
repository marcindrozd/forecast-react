const initialState = () => (
  { currentLocation: 'Rybnik,pl' }
);

const currentLocation = (state = initialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default currentLocation;
