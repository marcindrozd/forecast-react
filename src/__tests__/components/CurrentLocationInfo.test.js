import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

import CurrentLocationInfo from '../../components/CurrentLocationInfo';

// const setup = () => {
//   const props = {
//     location: 'New York'
//   };

//   const enzymeWrapper = mount(<CurrentLocationInfo {...props} />);

//   return {
//     props,
//     enzymeWrapper
//   }
// }

describe('CurrentLocationInfo', () => {
  it('should render location', () => {
    const wrapper = mount(<CurrentLocationInfo store={mockStore({ location: { city: 'New York' } })} />);

    expect(wrapper.find('.location').text()).toEqual('New York');
  });
});
