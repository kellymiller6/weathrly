import React from 'react';
import reactDOM from 'react-dom';
import Weathrly from './components/Weathrly.js';

reactDOM.render(<Weathrly source='http://api.wunderground.com/api/719678143ed487e1/hourly10day/q/'/>, document.getElementById('application'))
