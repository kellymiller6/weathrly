import React, { Component } from 'react';
import Weathrly from './Weathrly'
import $ from 'jquery';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      api: '',
    };
  }

  submitItem(location) {
    $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${this.state.location}`).then((response) => {
      this.setState({ api: response.RESULTS[0].l });
    }
  );
    this.props.handleLocationSubmit(this.state.api);
    this.setState({ location: '' });
  }

  render() {
    return (
      <div className='nav'>
        <input className='input-field text'
               type='text'
               placeholder='City, State'
               value={this.state.location}
               onChange={ (event) => {
                 this.setState({ location: event.target.value });
               }}
              />
        <input className='input-field submit'
               type='submit'
               disabled={!this.state.location}
               onClick={this.submitItem.bind(this)}
               />
      </div>
    );
  }
}
