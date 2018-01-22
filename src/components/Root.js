import React from 'react';
import { Provider } from 'react-redux';

import ForecastApp from './ForecastApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <ForecastApp />
  </Provider>
);

export default Root;
