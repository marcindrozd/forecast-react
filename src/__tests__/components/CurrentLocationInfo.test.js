import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

import CurrentLocationInfo from '../../components/CurrentLocationInfo';

describe('CurrentLocationInfo', () => {
  it('should render location', () => {
    const wrapper = mount(<CurrentLocationInfo store={mockStore({ location: { city: 'New York' } })} />);

    expect(wrapper.find('.location').text()).toEqual('New York');
  });
});
