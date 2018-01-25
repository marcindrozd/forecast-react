import React from 'react';
import { shallow } from 'enzyme';

import ForecastError from 'components/ForecastError';

describe('ForecastError', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<ForecastError />));

  it('displays the error message', () => {
    expect(wrapper.find('h1').text()).toEqual('Something went wrong');
  });
});
