import React from 'react';
import { mount } from 'enzyme';

import ForecastTable from 'components/ForecastTable';

let wrapper;
const props = () => ({
  forecastData: [
    {
      date: '28-01-2018',
      temp: '2'
    },
    {
      date: '29-01-2018',
      temp: '4'
    }
  ]
});

beforeEach(() => wrapper = mount(<ForecastTable {...props() } />))

describe('ForecastTable', () => {
  it('should render table with data', () => {
    expect(wrapper.find('table th').at(0).text()).toEqual('Date:')
    expect(wrapper.find('table th').at(1).text()).toEqual('28-01-2018');
    expect(wrapper.find('table th').at(2).text()).toEqual('29-01-2018');

    expect(wrapper.find('table td').at(0).text()).toEqual('Max Temp.');
    expect(wrapper.find('table td').at(1).text()).toEqual('2°C');
    expect(wrapper.find('table td').at(2).text()).toEqual('4°C');
  });
});
