import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import TenDay from './TenDay';
import $ from 'jquery';

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      currentWeather: null,
      tenDay: null,
      hourly: null,
    };
  }

  // componentDidMount() {
  //   const location = localStorage.getItem('location');
  //   this.setState({ location: location ? location : '' }, () => {
  //     this.setState({ weather: this.handleLocationSubmit() });
  //   });
  // }

  handleLocationSubmit() {
    // localStorage.setItem('location', this.state.location.toLowerCase());
    $.get(`${this.props.source}${this.state.state}/${this.state.city}.json`)
    .then((forecast) => {
      this.setState({ currentWeather: forecast.current_observation,
                      tenDay: forecast.forecast,
                      hourly: forecast.hourly_forecast});
    });
  }

  render() {
    return (
      <div>
        <input type='text'
               placeholder='City'
               value={this.state.city}
               onChange={(event) => { this.setState({ city: event.target.value }); }}
              />
        <input type='text'
               placeholder='State'
               value={this.state.state}
               onChange={(event) => { this.setState({ state: event.target.value }); }}
              />
        <input type='submit'
               disabled={!this.state.city || !this.state.state}
               onClick={this.handleLocationSubmit.bind(this)}
               />
        <section>
          <h3>Current Weather</h3>
          <CurrentWeather currentWeather={this.state.currentWeather} />
          <h3>Ten Day Forecast</h3>
          <TenDay tenDay= { this.state.tenDay } />
        </section>
      </div>
    );
  }
}
