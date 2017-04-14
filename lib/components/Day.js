import React from 'react';

const Day = ({ weekday, highFahrenheit, lowFahrenheit, conditions, icon_url }) => {
  return (
    <section>
      <p> { weekday } </p>
      <p>{ highFahrenheit + '℉' }</p>
      <p>{ lowFahrenheit + '℉' }</p>
      <p>{ conditions }</p>
      <p><img src={ icon_url.toString() }/></p>
    </section>
  );
};

export default Day;