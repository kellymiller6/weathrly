import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
  if (currentWeather === null) {
    return (
      <section>Welcome to Weathrly, please enter a city and state</section>
    );
  }

  return (
  <section className='current-card'>
    <h3>{currentWeather.display_location.full}</h3>
    <p><img src={currentWeather.icon_url.toString()}/></p>
    <h3>{currentWeather.feelslike_f + '℉'}</h3>
    <p>{currentWeather.weather}</p>
    <p>{currentWeather.observation_time}</p>
  </section>
  );
};


export default CurrentWeather;
