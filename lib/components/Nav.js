import React, { Component } from 'react';
import Weathrly from './Weathrly'
import $ from 'jquery';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
    };
  }

  submitItem(city, state) {
    this.props.handleLocationSubmit(this.state);
    this.setState({ city: '', state: '' });
  }


  render() {
    return (
      <div className='nav'>
        <input className='input-field'
               type='text'
               placeholder='City'
               value={this.state.city}
               onChange={(event) => { this.setState({ city: event.target.value }); }}
              />
        <input className='input-field'
               type='text'
               placeholder='State'
               value={this.state.state}
               onChange={(event) => { this.setState({ state: event.target.value }); }}
              />
        <input className='input-field'
               type='submit'
               disabled={!this.state.city || !this.state.state}
               onClick={this.submitItem.bind(this)}
               />
      </div>
    );
  }
}
