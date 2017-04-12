import React from 'react';

const Hourly = ({ hourly }) => {
  if (hourly !== null) {
    return (
      <section>
        { hourly.slice(0,7).map((hour, index) => {
          return (
            <section key={index}>
              <p>{hour.condition}</p>
              <p>{hour.feelslike.english}</p>
              <p>{hour.wx}</p>
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
