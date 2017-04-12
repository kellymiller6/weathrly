import React from 'react';

const WeatherList = ({ allTheWeather }) => {
  if (!allTheWeather.length) {
    return (
      <section>weathersss</section>
    );
  }

  return (
  <section>
    {allTheWeather.map((weatherCard, index) => {
      return (
        <section key={index}>
          <p>{weatherCard.location}</p>
          <p>{weatherCard.temp.high}</p>
          <p>{weatherCard.temp.low}</p>
        </section>
      );
    })}
  </section>
  );
}


export default WeatherList;
