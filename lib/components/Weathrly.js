import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import TenDay from './TenDay';
import Hourly from './Hourly';
import Nav from './Nav'
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
    const weathrly = JSON.parse(localStorage.getItem('weathrly'));
    if (weathrly) {
      this.handleLocationSubmit(weathrly);
    }
  }

  handleLocationSubmit(props) {
    localStorage.setItem('weathrly', JSON.stringify(props));
    $.get(`${this.props.source}${props.state}/${props.city}.json`)
    .then((forecast) => {
      console.log(forecast)
      this.setState({ currentWeather: forecast.current_observation,
                      tenDay: forecast.forecast,
                      hourly: forecast.hourly_forecast });
    });
  }

  render() {
    return (
      <div>
      <section>
        <h3></h3>
        <Nav handleLocationSubmit={this.handleLocationSubmit.bind(this) } />
      </section>
        <section>
          <h3>Current Weather</h3>
          <CurrentWeather currentWeather={this.state.currentWeather}
                          tenDay={this.state.tenDay}
                        />
        </section>
        <section>
          <h3>Ten Day Forecast</h3>
          <TenDay tenDay={this.state.tenDay} />
        </section>
        <section>
          <h3>Hourly Forecast</h3>
          <Hourly hourly={this.state.hourly} />
        </section>
      </div>
    );
  }
}
