
import Weathrly from '../lib/components/Weathrly';
import CurrentWeather from '../lib/components/CurrentWeather'
import TenDay from '../lib/components/TenDay'
import Nav from '../lib/components/Nav'
import stub from './stubAPI.json';
import React from 'react';
import { shallow, mount } from 'enzyme';



describe('Weathrly', () => {
  it('contains a current Weather component', () => {
    const wrapper = shallow(<Weathrly />)
    expect(wrapper.find('CurrentWeather').length).toBe(1)
  })

  it('contains an hourly component', () => {
    const wrapper = shallow(<Weathrly />)
    expect(wrapper.find('Hourly').length).toBe(1)
  })

  it('contains a ten day component', () => {
    const wrapper = shallow(<Weathrly />)
    expect(wrapper.find('TenDay').length).toBe(1)
  })

  it('should have a default states of null', () => {
    const wrapper = shallow(<Weathrly />);
    const state = wrapper.state();
    expect(state.currentWeather).toEqual(null)
    expect(state.tenDay).toEqual(null)
    expect(state.hourly).toEqual(null);
  });
});
