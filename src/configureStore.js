import { createStore } from 'redux';

import forecastApp from './reducers';

const configureStore = () => {
  const store = createStore(forecastApp);
  return store;
};

export default configureStore;
