import React from 'react';

const TenDay = ({ tenDay }) => {
  if (tenDay !== null) {
    return (
      <section>
        { tenDay.simpleforecast.forecastday.map((day, index) => {
          return (
            <section key={index}>
              <p>{day.high.fahrenheit}</p>
              <p>{day.low.fahrenheit}</p>
              <p>{day.conditions}</p>
            </section>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
};

export default TenDay;
