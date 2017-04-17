import React from 'react';
import Day from './Day.js'

const TenDay = ({ tenDay }) => {
  if (tenDay !== null) {
    return (
      <section>
        { tenDay.simpleforecast.forecastday.map((day, index) => {
          return (
            <section key={index}>
              <Day highFahrenheit = { day.high.fahrenheit }
                   lowFahrenheit = { day.low.fahrenheit }
                   conditions = { day.conditions }

                   icon_url= { day.icon_url }

                 />
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
