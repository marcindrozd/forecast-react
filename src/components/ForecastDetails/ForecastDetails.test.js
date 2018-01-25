import React from 'react';
import { shallow } from 'enzyme';

import ForecastDetails from 'components/ForecastDetails';

describe('ForecastDetails', () => {
  let wrapper;
  const props = () => (
    {
      location: 'New York',
      forecastData: [
        {
          date: '25-01-2018',
          temp: 12,
        },
      ],
    }
  );

  beforeEach(() => wrapper = shallow(<ForecastDetails {...props()} />));

  it('renders CurrentLocation components', () => {
    expect(wrapper.find('CurrentLocation').exists()).toBe(true);
  });

  it('renders connected ForecastTable component', () => {
    expect(wrapper.find('ForecastTable').exists()).toBe(true);
  });

  it('renders connected ForecastChart component', () => {
    expect(wrapper.find('ForecastChart').exists()).toBe(true);
  });
});
