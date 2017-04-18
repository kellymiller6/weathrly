import Hourly from '../lib/components/Hourly';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('Hourly', () => {
  const hours = stub.hourly_forecast;
  const hour = shallow(<Hourly hourly = { hours }/>);
  const hoursArray = hour.find('.hour');

  it('should have an array of ten hours', () => {
    expect(hoursArray.length).toEqual(10);
  });

  it('should display a time for each hour', () => {
    expect(hoursArray.nodes[0].props.children[0].props.children[0]
                                                .props.children).toEqual('2:00 PM');
  });

  it('should display a temperature for each hour', () => {
    expect(hoursArray.nodes[0].props.children[0].props.children[1].props.children).toEqual('75℉')
  });
});
