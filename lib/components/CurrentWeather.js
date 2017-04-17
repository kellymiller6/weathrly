import React from 'react';

const CurrentWeather = ({ currentWeather, tenDay }) => {
  if (currentWeather === null) {
    return (
      <section>Welcome to Weathrly, please enter a city and state</section>
    );
  }

  return (
  <section className='current-weather'>
    <h1 className='current-day'>{tenDay.txt_forecast.forecastday[0].title}</h1>
    <h2 className='current-city'>{currentWeather.display_location.full}</h2>
    <h3 className='simple-forecast'>{tenDay.simpleforecast.forecastday[0].conditions}</h3>
    <article className='weather-icons'>
      <h3 className='weather-icon'><img src={currentWeather.icon_url.toString()}/></h3>
    </article>
    <article className='weather-summary'>
      <h1 className='current-temp'>Current Temperature: {currentWeather.temp_f} F</h1>
      <h2 className='forecast-summary'>Summary: {tenDay.txt_forecast.forecastday[0].fcttext}</h2>
    </article>
    <article className='low-high'>
      <h3 className='current-high'>Expected high: {tenDay.simpleforecast.forecastday[0].high.fahrenheit}</h3>
      <h3 className='current-low'>Expected low: {tenDay.simpleforecast.forecastday[0].low.fahrenheit}</h3>
    </article>
  </section>
  );
};


export default CurrentWeather;
