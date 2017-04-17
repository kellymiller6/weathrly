import Nav from '../lib/components/Nav';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Nav', () => {
  it('should start off with an empty string as the state', () => {
    const nav = shallow(<Nav />);
    const state = nav.state();
    expect(state.location).toEqual('');
  });

  it('should change the state based on user input', () => {
    const mockfn = jest.fn();
    const nav = shallow(<Nav handleLocationSubmit={() => { mockfn() } } />);
    const state = nav.state();
    expect(state.location).toEqual('');

    const input = nav.find('.text');

    input.simulate('change', { target: { value: 'kaneohe, hi' } });
    expect(state.location).toEqual('kaneohe, hi');
  });

  it('should reset the state on click of submit', () => {
    const nav = shallow(<Nav />);
    const state = nav.state();
    expect(state.location).toEqual('');

    const input = nav.find('.text');

    input.simulate('change', { target: { value: 'kaneohe, hi' } });
    expect(state.location).toEqual('kaneohe, hi');

    const submit = nav.find('.submit');

    submit.simulate('click');
    expect(state.location).toEqual('');
  });
});
