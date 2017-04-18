import TenDay from '../lib/components/TenDay';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('TenDay', () => {
  const days = stub.forecast;
  const tenDay = shallow(<TenDay tenDay = { days }/>);

  it('should have ten Day components rendered', () => {
    expect(tenDay.find('.days').length).toEqual(10);
  });
});
