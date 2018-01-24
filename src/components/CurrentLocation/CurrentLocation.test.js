import React from 'react';
import { mount } from 'enzyme';

import CurrentLocation from 'components/CurrentLocation';

describe('CurrentLocation', () => {
  it('should render location', () => {
    const wrapper = mount(<CurrentLocation location='New York' />);

    expect(wrapper.find('.location').text()).toEqual('New York');
  });
});
