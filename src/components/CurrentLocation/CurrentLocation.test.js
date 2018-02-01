import React from 'react';
import { shallow } from 'enzyme';

import CurrentLocation from 'components/CurrentLocation';

describe('CurrentLocation', () => {
  it('should render passed in location', () => {
    const wrapper = shallow(<CurrentLocation location='New York' />);

    expect(wrapper.find('.location').text()).toEqual('New York');
  });
});
