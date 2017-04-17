import React from 'react';

const CurrentWeather = ({ currentWeather, tenDay }) => {
  if (currentWeather === null) {
    return (
      <section>Welcome to Weathrly, please enter a city and state</section>
    );
  }

  return (
  <section className='current-card'>
    <h3>{currentWeather.display_location.full}</h3>
    <h4>{tenDay.txt_forecast.forecastday[0].title}</h4>
    <h3><img src={currentWeather.icon_url.toString()}/></h3>
    <h4>{tenDay.simpleforecast.forecastday[0].conditions}</h4>
    <h4>Current Temperature: {currentWeather.temp_f} ℉</h4>
    <p className="summary">{tenDay.txt_forecast.forecastday[0].fcttext}</p>
    <h4>Expected high: {tenDay.simpleforecast.forecastday[0].high.fahrenheit }℉</h4>
    <h4>Expected low: {tenDay.simpleforecast.forecastday[0].low.fahrenheit }℉</h4>
  </section>
  );
};


export default CurrentWeather;
