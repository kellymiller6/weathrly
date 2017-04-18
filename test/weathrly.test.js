import Weathrly from '../lib/components/Weathrly';
import Hourly from '../lib/components/Hourly';
import stub from './stubAPI.json';
import React from 'react';
import { shallow, mount } from 'enzyme';



describe('Weathrly', () => {
  it('should have a default states of null', () => {
    const wrapper = shallow(<Weathrly />);
    const state = wrapper.state();
    expect(state.currentWeather).toEqual(null)
    expect(state.tenDay).toEqual(null)
    expect(state.hourly).toEqual(null);
  });
});
