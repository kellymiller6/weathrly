import React from 'react';

const Hourly = ({ hourly }) => {
  if (hourly !== null) {
    return (
      <section>
        { hourly.slice(0,7).map((hour, index) => {
          return (
            <section key={index}>
              <h3 className='hourly-time'>Time: {hour.FCTTIME.civil}</h3>
              <h3 className='hourly-condition'>Condition: {hour.condition}</h3>
              <h4 className='hourly-temp'>Temp: {hour.feelslike.english}</h4>
            </section>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
};

export default Hourly;
