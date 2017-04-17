import Nav from '../lib/components/Nav';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Nav', () => {
  it('should have a default location in state of empty string', () => {
    const nav = shallow(<Nav />);
    const state = nav.state();
    expect(state.location).toEqual('');
  });

  it('should change the state based on user input', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Nav handleLocationSubmit={() => { spy() } } />);
    const input = wrapper.find('.text');
    input.simulate('change', { target: { value: 'kaneohe, hi' } });

    expect(wrapper.state('location')).toEqual('kaneohe, hi');
  });

  it('should reset the state on click of submit', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Nav handleLocationSubmit={() => { spy() } } />);
    const input = wrapper.find('.text');
    const submit = wrapper.find('.submit');
    input.simulate('change', { target: { value: 'kaneohe, hi' } });
    expect(wrapper.state('location')).toEqual('kaneohe, hi');

    submit.simulate('click');
    expect(wrapper.state('location')).toEqual('');
  });
});
