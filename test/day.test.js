import Day from '../lib/components/Day';
import TenDay from '../lib/components/TenDay';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('Day', () => {
  it('should render data for current day', () => {
    const wrapper = shallow(
      <Day
        highFahrenheit = { 'HIGH TEMP' }
        lowFahrenheit = { 'LOW TEMP'}
        conditions = { 'CONDITONS' }
        weekday = { 'TODAY' }
        icon_url= { '' }
      />);
    expect(wrapper.find('.currentDay').text()).toEqual('TODAY')
  });
});
