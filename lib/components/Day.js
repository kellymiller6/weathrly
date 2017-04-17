import React from 'react';

const Day = ({ highFahrenheit, lowFahrenheit, conditions, icon_url }) => {
  return (
    <section>
      <h2 className='daily-condition'>{ conditions }</h2>
      <h4 className='daily-icon'><img src={ icon_url.toString() }/></h4>
      <h3 className='daily-high'>{ highFahrenheit }</h3>
      <h3 className='daily-low'>{ lowFahrenheit }</h3>
    </section>
  );
};

export default Day;
