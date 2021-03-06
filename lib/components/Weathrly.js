import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import TenDay from './TenDay';
import Hourly from './Hourly';
import Nav from './Nav';
import $ from 'jquery';


export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: null,
      tenDay: null,
      hourly: null,
    };
  }

  componentDidMount() {
    const weather = localStorage.getItem('weathrly');

    if (weather) {
      const weathrly = JSON.parse(weather);
      this.handleLocationSubmit(weathrly);
    }
  }

  handleLocationSubmit(location) {
    $.get(`${this.props.source}${location}.json`)
    .then((forecast) => {
      localStorage.setItem('weathrly', JSON.stringify(location));
      this.setState({ currentWeather: forecast.current_observation,
                      tenDay: forecast.forecast,
                      hourly: forecast.hourly_forecast });
    }).catch(() => {
      alert('Please enter a valid location.')
    });
  }

  render() {
    return (
      <div className='main-wrapper'>
        <section>
          <h3></h3>
          <Nav handleLocationSubmit={this.handleLocationSubmit.bind(this) } />
        </section>
        <div className='flex-wrapper'>
          <section className='current-weather'>
            <h2>Current Weather</h2>
            <CurrentWeather currentWeather={this.state.currentWeather}
                            tenDay={this.state.tenDay}/>
          </section>
          <div className='two-column'>
            <section className='hour-containter'>
              <h3>Hourly Forecast</h3>
              <Hourly hourly={this.state.hourly} />
            </section>
            <section className='ten-day'>
            <h3>Ten Day Forecast</h3>
            <TenDay tenDay={this.state.tenDay} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
