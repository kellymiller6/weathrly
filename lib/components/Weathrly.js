import React, { Component } from 'react';
import WeatherList from './WeatherList';
import $ from 'jquery';

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      weather: [],
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
    .then((weather) => {
      this.setState({ weather: weather });
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
          <WeatherList allTheWeather={this.state.weather} />
        </section>
      </div>
    );
  }
}
