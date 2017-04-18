import CurrentWeather from '../lib/components/CurrentWeather';
import stub from './stubAPI.json';
import React from 'react';
import { shallow } from 'enzyme';

describe('Hourly', () => {
  const current = stub.current_observation;
  const tenDay = stub.forecast;
  const currentWeather = shallow(<CurrentWeather currentWeather = { current }
                                                 tenDay={ tenDay }/>);
  const card = currentWeather.find('.current-card');

  it('should display the current location', () => {
    const todaysLocation = card.node.props.children[0].props.children;
    expect(todaysLocation).toEqual("Denver, CO")
  });

  it('should display the current day', () => {
    const todaysWeekday = card.node.props.children[1].props.children;
    expect(todaysWeekday).toEqual("Monday")
  });

  it('should display the current icon url', () => {
    const todaysIconUrl = card.node.props.children[2].props.children.props.src;
    expect(todaysIconUrl).toEqual("http://icons.wxug.com/i/c/k/mostlycloudy.gif")
  });

  it('should display the current condition', () => {
    const todaysConditions = card.node.props.children[3].props.children;
    expect(todaysConditions).toEqual("Overcast")
  });

  it('should display the current temp', () => {
    const currentTemp = card.node.props.children[4].props.children[1];
    expect(currentTemp).toEqual(76.5)
  });

  it('should display summary of current weather', () => {
    const currentSummary = card.node.props.children[5].props.children;
    expect(currentSummary).toEqual('Generally cloudy. High 76F. Winds W at 10 to 20 mph.')
  });

  it('should display expected high of current day', () => {
    const expectedHigh = card.node.props.children[6].props.children[1];
    expect(expectedHigh).toEqual('76')
  });

  it('should display expected low of current day', () => {
    const expectedHigh = card.node.props.children[7].props.children[1];
    expect(expectedHigh).toEqual('46')
  });

});
