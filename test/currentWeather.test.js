import CurrentWeather from '../lib/components/CurrentWeather';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('Hourly', () => {


  it('should have an array of ten hours', () => {
    const current = stub.current_observation;
    // const currentWeather = shallow(<CurrentWeather CurrentWeather = { current }/>);
    console.log(stub)
  });

});
