import React from 'react';

const Day = ({ weekday, highFahrenheit, lowFahrenheit, conditions, icon_url }) => {
  return (
    <section className='card day'>
      <div className="left-side">
        <h4 className='currentDay'>{ weekday }</h4>
        <p>{ highFahrenheit + '℉' + ' /'} {lowFahrenheit + '℉' }</p>
        <h5>{ conditions }</h5>
      </div>
      <div className='right-side'>
        <p><img src={ icon_url.toString() }/></p>
      </div>
    </section>
  );
};

export default Day;
