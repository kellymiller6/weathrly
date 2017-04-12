import React, { Component } from 'react';
import WeatherList from './WeatherList';
import $ from 'jquery';

export default class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    this.setState({ location: location ? location : '' }, () => {
      this.setState({ weather: this.handleLocationSubmit() });
    });
  }

  handleLocationSubmit() {
    localStorage.setItem('location', this.state.location.toLowerCase());
    $.get(this.props.source + this.state.location.toLowerCase()).then((weather) => {
      this.setState({ weather: weather });
    });
  }

  render() {
    return (
      <div>
        <input type='text'
               placeholder='City, State'
               value={this.state.location}
               onChange={(event) => { this.setState({ location: event.target.value }); }}
               />
        <input type='submit'
               disabled={!this.state.location}
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
