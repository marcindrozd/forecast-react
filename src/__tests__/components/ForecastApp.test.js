import React from 'react';
import ReactDOM from 'react-dom';
import ForecastApp from '../../components/ForecastApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
