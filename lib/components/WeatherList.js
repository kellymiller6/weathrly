import React from 'react';

const WeatherList = ({ currentWeather }) => {
  console.log(currentWeather)
  if (currentWeather === null) {
    return (
      <section>Welcome to Weathrly, please enter a city and state</section>
    );
  }

  return (
  <section>
    <p>{currentWeather.display_location.full}</p>
    <p>{currentWeather.weather}</p>
    <p>{currentWeather.observation_time}</p>
    <p>{currentWeather.feelslike_f}</p>
    <p>{currentWeather.icon_url}</p>
    <p><img src='currentWeather.icon_url'/></p>
  </section>
  );
}


export default WeatherList;
