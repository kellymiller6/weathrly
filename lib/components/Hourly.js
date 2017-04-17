import React from 'react';

const Hourly = ({ hourly }) => {
  if (hourly !== null) {
    return (
      <section>
        { hourly.slice(0,7).map((hour, index) => {
          return (
            <section key={index} className='card'>
              <div className="right-day">
                <h4>{hour.FCTTIME.civil}</h4>
                <p>{hour.feelslike.english + '℉'}</p>
                <h5>{hour.condition}</h5>
              </div>
              <div className="left-day">
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
