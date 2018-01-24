import React from 'react';
import { mount } from 'enzyme';

import ForecastTable from 'components/ForecastTable';

const setup = () => {
  const props = {
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
  };

  const enzymeWrapper = mount(<ForecastTable {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('ForecastTable', () => {
  it('should render table with data', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('table th').at(0).text()).toEqual('Date:')
    expect(enzymeWrapper.find('table th').at(1).text()).toEqual('28-01-2018');
    expect(enzymeWrapper.find('table th').at(2).text()).toEqual('29-01-2018');

    expect(enzymeWrapper.find('table td').at(0).text()).toEqual('Max Temp.');
    expect(enzymeWrapper.find('table td').at(1).text()).toEqual('2°C');
    expect(enzymeWrapper.find('table td').at(2).text()).toEqual('4°C');
  });
});
