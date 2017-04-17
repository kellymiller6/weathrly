import Hourly from '../lib/components/Hourly';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('Hourly', () => {
  const hours = stub.hourly_forecast;

  it('should have an array of ten hours', () => {
    const hour = shallow(<Hourly hourly = { hours }/>);
    const hoursArray = hour.find('.hour');
    expect(hoursArray.length).toEqual(10);
  });

  it('should display a time for each hour', () => {
    const hour = shallow(<Hourly hourly = { hours }/>);
    const hoursArray = hour.find('.hour');
    console.log(hoursArray);
    // expect(hoursArray[0].FCTTIME.civil).toEqual()
  });
});
