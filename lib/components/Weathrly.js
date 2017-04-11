import React, { Component } from 'react';

export default class Weathrly extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <input type='text' placeholder='City, State'/>
        <input type='submit'/>
        <section>Current Weather</section>
      </div>
    )
  }
}
