import React from 'react';

const Day = ({ weekday, highFahrenheit, lowFahrenheit, conditions, icon_url }) => {
  return (
    <section className='card'>
      <div className="left-day">
        <h4> { weekday } </h4>
        <p>{ highFahrenheit + '℉' + ' /'} {lowFahrenheit + '℉' }</p>
        <h5>{ conditions }</h5>
      </div>
      <div className='right-day'>
        <p><img src={ icon_url.toString() }/></p>
      </div>
    </section>
  );
};

export default Day;
