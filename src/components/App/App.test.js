import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('renders Header components', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('renders connected Forecast component', () => {
    expect(wrapper.find('Connect(Forecast)').exists()).toBe(true);
  });
});
