import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
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
    <p><img src={currentWeather.icon_url.toString()}/></p>
  </section>
  );
};


export default CurrentWeather;
