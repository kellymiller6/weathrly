import React from 'react';

const Hourly = ({ hourly }) => {
  if (hourly !== null) {
    return (
      <section className="hourly">
        { hourly.slice(0, 10).map((hour, index) => {
          return (
            <section key={index} className='card hour'>
              <div className="left-side">
                <h4>{hour.FCTTIME.civil}</h4>
                <p>{hour.feelslike.english + '℉'}</p>
                <h5>{hour.condition}</h5>
              </div>
              <div className="right-side">
                <p><img src={ hour.icon_url.toString() }/></p>
              </div>
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
