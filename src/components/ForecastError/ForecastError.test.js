import React from 'react';
import { shallow } from 'enzyme';

import ForecastError from 'components/ForecastError';

describe('ForecastError', () => {
  let wrapper;
  const props = () => ({
    errorMessage: 'API error',
  });

  beforeEach(() => wrapper = shallow(<ForecastError {...props()} />));

  it('displays the error message', () => {
    expect(wrapper.find('h1').text()).toEqual('Something went wrong');
    expect(wrapper.find('p').text()).toEqual('API error');
  });
});
