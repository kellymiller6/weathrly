import React from 'react';

const WeatherList = ({ allTheWeather }) => {
  if (!allTheWeather.length) {
    return (
      <section>Welcome to Weathrly, please enter a city and state</section>
    );
  }

  return (
  <section>
    {allTheWeather.map((weatherCard, index) => {
      return (
        <section key={index}>
          {/* <p>{weatherCard.city}</p>
          <p>{weatherCard.state}</p> */}
          <p>{weatherCard.hourly_forecast[0].temp.english}</p>
          <p>{weatherCard.temp.low}</p>
        </section>
      );
    })}
  </section>
  );
}


export default WeatherList;
