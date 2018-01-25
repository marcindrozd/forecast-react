import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'

import Forecast from 'components/Forecast';

const mockStore = configureStore();
const sampleForecast = [
  {
    date: '25-01-2018',
    temp: 12,
  },
]

const initialState = ({ inProgress = true, city = 'NewYork', tempByDate = sampleForecast }) => (
  {
    isFetching: {
      inProgress,
    },
    location: {
      city,
    },
    forecast: {
      tempByDate,
    },
  }
);

describe('Forecast', () => {
  let wrapper;
  let store;

  describe('when is fetching', () => {
    beforeEach(() => {
      store = mockStore(initialState({ inProgress: true }));
      wrapper = shallow(<Forecast store={store} />)
    });

    it('displays the Spinner', () => {
      expect(wrapper.dive().find('Spinner').exists()).toBe(true);
    });

    it('does not show ForecastDetails', () => {
      expect(wrapper.dive().find('ForecastDetails').exists()).toBe(false);
    });
  });

  describe('when is not fetching', () => {
    beforeEach(() => {
      store = mockStore(initialState({ inProgress: false }));
      wrapper = shallow(<Forecast store={store} />)
    });

    it('does not display the Spinner', () => {
      expect(wrapper.dive().find('Spinner').exists()).toBe(false);
    });

    it('dispalys the ForecastDetails', () => {
      expect(wrapper.dive().find('ForecastDetails').exists()).toBe(true);
    });
  });
});
